import type { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import env from "./env";

export default async function fetchImages(url: string, retries=3):
Promise<ImagesResults | undefined> {
    try {
        const res = await fetch(url, {
            cache: 'force-cache',
            headers: {
                Authorization: env.PEXELS_API_KEY
            }
        });
        console.log(res);
        if(!res.ok) {
            if(res.status === 429 && retries > 0){
                await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retries)));
                return fetchImages(url, retries - 1)
            }
            throw new Error(`Fetch Images error`)
        };

        const ImagesResults:ImagesResults = await res.json();

        //parse data with zod schema
        const parsedData = ImagesSchemaWithPhotos.parse(ImagesResults);
        //console.log(parsedData);
        if(parsedData.total_results === 0) return undefined;

        return parsedData;
    } catch (err) {
        //will show in terminal
        if(err instanceof Error) console.log(err.stack);
    }
}