'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from 'components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from 'components/ui/select';
import { Label } from 'components/ui/label';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { Button } from 'components/ui/button';
import * as contents from 'app/api-client/contents';
import { useContentsManager } from 'hooks/useContentsManager';
import * as apiType from 'app/api-client/type';

export const ContentsEditor = ({
  children,
  editContents,
  type_id,
  handleUpdate
}) => {
  // contentsを作るときにnameの重複を確認するため
  const [postNameList, setPostNameList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [selectTypeId, setSelectTypeId] = useState(type_id || 0);
  const { statusMessage, handleSave } = useContentsManager();

  const getNames = async () => {
    const names = await contents.getNames();
    setPostNameList(names);
  };
  const getTypes = async () => {
    const types = await apiType.getType();
    setTypeList(types);
  };
  useEffect(
    () => {
      if (type_id) {
        setSelectTypeId(type_id);
      }
    },
    [type_id]
  );
  useEffect(() => {
    getNames();
    getTypes();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    mode: 'onChange'
  });

  const [open, setOpen] = useState(false);

  // 編集モードの場合、フォームに初期値を設定
  useEffect(
    () => {
      if (editContents) {
        reset({
          name: editContents.name,
          title: editContents.title,
          description: editContents.description || '',
          image: '',
          type_id: editContents.type_id || type_id || 0
        });
        setSelectTypeId(editContents.type_id || type_id || 0);
      } else if (type_id) {
        // 新規作成時でもtype_idが指定されている場合
        setValue('type_id', type_id);
        setSelectTypeId(type_id);
      }
    },
    [editContents, reset, type_id, setValue]
  );

  const isEditMode = !!editContents;

  const handleSubmitForm = async data => {
    // type_idを確実に含める
    const formData = {
      ...data,
      type_id: selectTypeId
    };

    await handleSave(formData);
    handleUpdate();
    setOpen(false);
  };

  const handleTypeChange = value => {
    setSelectTypeId(parseInt(value));
    setValue('type_id', parseInt(value));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? '記事編集' : '新規記事作成'}
          </DialogTitle>
          <DialogDescription>
            {isEditMode ? '記事の情報を編集できます' : 'まずはcontents作成してね'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="grid gap-4">
            {/* 編集モードの場合のみIDを送信 */}
            {isEditMode &&
              <input
                type="hidden"
                {...register('id')}
                value={editContents.id}
              />}
            <div className="grid gap-3">
              <Label htmlFor="name">名前(アクセスするときの名前)</Label>
              <Input
                id="name"
                name="name"
                {...register('name', {
                  required: '必須',
                  validate: data => {
                    if (isEditMode) {
                      // 編集モードの場合、自身の名前以外で重複チェック
                      if (
                        data !== editContents.name &&
                        postNameList.includes(data)
                      ) {
                        return '既に使われている名前です。';
                      }
                    } else {
                      // 新規作成モードの場合
                      if (postNameList.includes(data)) {
                        return '既に使われている名前です。';
                      }
                    }
                  }
                })}
              />
              {errors.name &&
                <span>
                  {errors.name.message}
                </span>}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="title">タイトル</Label>
              <Input
                id="title"
                name="title"
                {...register('title', {
                  required: '必須'
                })}
              />
              {errors.title &&
                <span>
                  {errors.title.message}
                </span>}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">説明</Label>
              <Textarea
                id="description"
                name="description"
                {...register('description')}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="image">画像</Label>
              <Input
                id="image"
                name="image"
                type="file"
                accept=".png"
                {...register('image', {
                  required: '必須'
                })}
              />
              {errors.image &&
                <span>
                  {errors.image.message}
                </span>}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="type">タイプ</Label>
              <Select
                value={(selectTypeId || 0).toString()}
                onValueChange={handleTypeChange}
                name="type_id"
              >
                <SelectTrigger>
                  <SelectValue placeholder="タイプを選択" />
                </SelectTrigger>
                <SelectContent>
                  {typeList.map(type =>
                    <SelectItem key={type.id} value={type.id.toString()}>
                      {type.name}
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
              {errors.type_id &&
                <span>
                  {errors.type_id.message}
                </span>}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              {isEditMode ? '更新' : 'Save changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
