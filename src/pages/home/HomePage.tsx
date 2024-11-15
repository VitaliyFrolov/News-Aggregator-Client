'use server'
import { getNews } from '@/entities/news';
import { GridNews } from '@/shared/ui/gridNews/ui/GridNews';
import { Header } from '@/widgets/header';

export default async function HomePage() {
    const data = await getNews();

    return (
        <div>
            <Header />
            <GridNews
                news={data}
            />
        </div>
    );
};