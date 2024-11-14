import { getNews } from "@/entities/news";

export default async function HomePage() {
    const data = await getNews();
    console.log(data);

    return (
        <div>
            {data ? (
                data.map((item) => (
                    <div key={item.id}>
                        <h2>
                            {item.title}
                        </h2>
                        <p>
                            {item.articles}
                        </p>
                        <a href={item.link} target='_blank'>
                            {item.link}
                        </a>
                    </div>
                ))
            ) : (
                <div>
                    Loading...
                </div>
            )}
        </div>
    );
};