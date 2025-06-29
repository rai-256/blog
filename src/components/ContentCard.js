import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const ContentCard = ({ content, link }) => {
  const { title, explanation, update_at, image_name } = content;
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const getImageSrc = () => {
    if (!image_name || imageError) {
      return '/japan.png'; // 仮の画像
    }
    return `http://localhost:3001/image/${image_name}`;
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const CardContent = () =>
    <div className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative h-48 bg-gray-100">
        {/* ローディング中は仮の画像を表示 */}
        {imageLoading &&
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <Image
              src="/japan.png"
              alt="読み込み中"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
            </div>
          </div>}

        {/* 実際の画像 */}
        <img
          src={getImageSrc()}
          alt={title || 'コンテンツ画像'}
          fill
          className="object-cover"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />

        {/* エラー時は仮の画像を表示 */}
        {imageError &&
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <Image src="/japan.png" alt="画像なし" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
              <div className="text-center text-white">
                <div className="text-sm font-medium">画像なし</div>
              </div>
            </div>
          </div>}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {explanation}
        </p>

        <div className="flex items-center text-xs text-gray-500">
          <span>更新日時: </span>
          <span className="ml-1 font-mono">
            {new Date(update_at).toLocaleString('ja-JP')}
          </span>
        </div>
      </div>
    </div>;

  // リンクがある場合はLinkでラップ
  if (link) {
    return (
      <Link href={link}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};
