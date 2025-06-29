'use client';
import { GetMemo } from 'app/api-client/memo';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function topPage() {
  const id = useParams();
  async function getMemo(id) {
    setMemo(await GetMemo(id));
  }
  // パスパラメータから値を取得
  const [memo, setMemo] = useState({
    title: '',
    contents: '',
    tags: [],
    img_link: ''
  });
  useEffect(() => {
    // idが取得できたら、何か処理を行う
    if (id) {
      getMemo(id);
      // ここでAPI呼び出しや状態更新などを行うことができます
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Make Memo</h1>
      <p className="text-lg">メモを作成するツールです。</p>
      <p className="text-lg">左側のメニューから記事を選択してください。</p>
      <div>
        {memo.contents}
        {console.log(memo)}
      </div>
    </div>
  );
}
