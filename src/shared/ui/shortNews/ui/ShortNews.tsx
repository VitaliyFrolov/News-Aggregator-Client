import { FC } from 'react';
import { IShortNewsProps } from '../type/props';
import Link from 'next/link';

export const ShortNews: FC<IShortNewsProps> = ({ title, articles, link, id }) => {
  return (
    <article className='bg-gray-100 border border-gray-200 rounded-lg shadow-md p-4 mb-4'>
      <Link href={`article-${id}`}>
        <h2 className='text-xl font-bold mb-2 text-gray-800'>{title}</h2>
        <p className='text-gray-700 leading-relaxed mb-4'>
          {articles.slice(0, 500)}...
        </p>
        <span className='text-gray-900 font-medium hover:underline'>Источник {link}</span>
      </Link>
    </article>
  );
};