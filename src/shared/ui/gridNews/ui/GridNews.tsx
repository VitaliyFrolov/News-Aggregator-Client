import { FC } from 'react';
import { ShortNews } from '../../shortNews';
import { IGridNewsProps } from '../type/props';

export const GridNews: FC<IGridNewsProps> = (props) => {
    const {
        news,
    } = props;

    if (news.length === 0) {
        return <div>Новости отсутствуют</div>
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
            {news ? news.map((item) => (
                <ShortNews
                    key={item.id} 
                    title={item.title}
                    articles={item.articles}
                    link={item.link}
                    id={item.id}
                />
            )) : (<div>Loading...</div>)}
         </div>
    );
};