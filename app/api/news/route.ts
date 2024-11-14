import { INews } from "@/entities/news/type/news";

export const GET = async () => {
    const response = await fetch('http://localhost:8000/api/news');
    const data: INews = await response.json();

    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    });
};