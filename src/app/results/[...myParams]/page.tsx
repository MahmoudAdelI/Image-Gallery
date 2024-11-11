import Filters from "@/app/components/Filters";
import Gallery from "@/app/components/Gallery"
import Loading from "@/app/Loading";
import { Suspense } from "react";


// const fetchPagesForCategory = async (category:string) => {
//     try {
//         const url = `https://api.pexels.com/v1/search?query=${category}`
//         const data = await fetchImages(url);
//         if(!data || !data.total_results || !data.per_page) return 0;
//         const totalPages = Math.ceil(data?.total_results / data?.per_page);
//         console.log(totalPages);
//         return totalPages;
//     } catch (e){
//         console.error(`Error fetching pages for category: ${category}`, e);
//         console.log('PEXELS_API_KEY:', env.PEXELS_API_KEY);
//         return 0;
//     }

// }

type StaticParam = {
    myParams: [string, string];
  };
const categories:string[]  = ['art', 'beauty', 'sports','fashion', 'models'];

export async function generateStaticParams() {
const staticParams:StaticParam[] = [];


const pages:number[] = Array.from({length: 5}, (_, i) => i + 1);
categories.forEach(category => {

    pages.forEach(page => staticParams.push({myParams: [category, page.toString()]}))
});
return staticParams;
}

type Props = {
    params: Promise<{
        myParams: string[] //TEST (string | undefined)[]
    }>
}
//TEST ASYNC PARAMS
export async function generateMetadata( {params}:Props ) {
    const { myParams } = await params;
    const topic = myParams?.[0] ?? 'curated';
    const page = myParams?.[1] ?? '1';
    return {
        title: `Results for ${ topic } - Page ${page}`
    }
}

export default async function searchResults( {params}: Props ) {
    const { myParams } = await params;
    const topic = myParams?.[0] ?? 'curated';
    const page = myParams?.[1] ?? '1';
    return(
        <>
            <Suspense><Filters /></Suspense>
            <Suspense fallback={<Loading />}><Gallery topic={ topic } page={ page }/></Suspense>
        </>
    )
}