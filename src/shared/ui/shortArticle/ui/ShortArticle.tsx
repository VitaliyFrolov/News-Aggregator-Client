import { FC } from 'react';
import { IShortArticleProps } from '../type/props';

export const ShortArticle: FC<IShortArticleProps> = ({ title, articles, link }) => {
  return (
    <article className='bg-gray-100 border border-gray-200 rounded-lg shadow-md p-4 mb-4'>
      <h2 className='text-xl font-bold mb-2 text-gray-800'>{title}</h2>
      <p className='text-gray-700 leading-relaxed mb-4'>
        {articles.slice(0, 500)}...
      </p>
      <a
        href={link}
        className='text-gray-900 font-medium hover:underline'
        target='_blank' rel='noopener noreferrer'
      >
        <span className='mr-1'>Источник:</span> {link}
      </a>
    </article>
  );
};