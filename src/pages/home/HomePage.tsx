import { getNews } from '@/entities/news';
import { GridNews } from '@/shared/ui/gridNews/ui/GridNews';

export default async function HomePage() {
    const data = await getNews();

    return (
        <div>
            <GridNews
                news={data}
            />
        </div>
    );
};