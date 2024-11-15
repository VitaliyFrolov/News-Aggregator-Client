import { GET } from "@/shared/api/serverFetch"; 
import { INews } from "../type/news";

export async function getNews(): Promise<INews[]> {
    const stak: INews[] = await GET('/stack', {
        headers: {
            'Cache-Control': 'no-cache',
        },
    });

    return stak;
};