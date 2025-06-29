import { FilePenLine } from 'lucide-react';
import { Button } from 'components/ui/button';
import { ContentsEditor } from './ContentsEditor';

export const ContentsCard = ({ contents, onSubmit }) => {
  return (
    <li className="p-6 border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* 画像エリア */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={'http://localhost:3001/contents/image/' + contents.name}
              alt={contents.title}
              className="w-full h-full object-cover"
            />
            {/* {contents.image_name
              ? <img
                  src={`/image/contents/${contents.image_name}`}
                  alt={contents.title}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.target.src = '/japan.png'; // 仮の画像
                  }}
                />
              : <img
                  src="/japan.png"
                  alt="デフォルト画像"
                  className="w-full h-full object-cover"
                />} */}
          </div>
        </div>

        {/* コンテンツエリア */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <a href={'./make_memo/' + contents.name} className="block">
                  <h2 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                    {contents.title}
                  </h2>
                </a>

                <ContentsEditor onSubmit={onSubmit} editContents={contents}>
                  <Button variant="outline" size="sm">
                    <FilePenLine />
                    編集
                  </Button>
                </ContentsEditor>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {contents.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-1 text-xs rounded-full ${contents.is_public
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'}`}
              >
                {contents.is_public ? '公開' : '非公開'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mt-3">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">作成日時:</span>
                <span className="font-mono text-xs">
                  {new Date(contents.create_at).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">更新日時:</span>
                <span className="font-mono text-xs">
                  {new Date(contents.update_at).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
