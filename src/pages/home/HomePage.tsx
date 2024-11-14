import { getNews } from "@/entities/news";
import { ShortArticle} from "@/shared/ui/shortArticle";

export default async function HomePage() {
    const data = await getNews();
    console.log(data);

    return (
        <div>
            {data ? (
                data.map((item) => (
                    <ShortArticle
                        key={item.id}
                        title={item.title}
                        articles={item.articles}
                        link={item.link}
                        id={item.id}
                    />
                ))
            ) : (
                <div>
                    Loading...
                </div>
            )}
        </div>
    );
};