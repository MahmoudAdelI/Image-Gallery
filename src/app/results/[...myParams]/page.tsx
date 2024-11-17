import Filters from "@/app/components/Filters";
import ClientGallery from "@/app/components/infinit scrolling test/ClientGallery";
// import Gallery from "@/app/components/Gallery"
// import { Suspense } from "react";
// import Loading from "./loading";

// type StaticParam = {
//     myParams: [string, string];
//   };
// const categories:string[]  = ['nature', 'summer', 'design', 'fashion', 'city'];

// export async function generateStaticParams() {
// const staticParams:StaticParam[] = [];


// const pages:number[] = Array.from({length: 3}, (_, i) => i + 1);
// categories.forEach(category => {

//     pages.forEach(page => staticParams.push({myParams: [category, page.toString()]}))
// });
// return staticParams;
// }

type Props = {
    params: Promise<{
        myParams: string[]
    }>
}
//TEST ASYNC PARAMS
export async function generateMetadata( {params}:Props ) {
    const { myParams } = await params;
    const topic = myParams?.[0] ?? 'curated';
    // const page = myParams?.[1] ?? '1';
    return {
        title: `Results for ${ topic }`
    }
}

export default async function searchResults( {params}: Props ) {
    const { myParams } = await params;
    const topic = myParams?.[0] ?? 'curated';
    // const page = myParams?.[1] ?? '1';
    return(
        <>
            <Filters />
            <ClientGallery topic={ topic } />
            {/* <Suspense fallback={<Loading />}>
             <Gallery topic={ topic } page={ page }/>
            </Suspense> */}
        </>
    )
}