import Filters from "@/app/components/Filters";
import InitialGalleryLoad from "@/app/components/infinit scrolling test/InitialGalleryLoad";
import { Suspense } from "react";

const categories:string[]  = ['landscape', 'travel', 'B&W', 'outfits', 'vintage'];

export async function generateStaticParams() {
    const staticParams = categories.map((c) => ({ myParams: c }));
    return staticParams;
};


type Props = {
    params: Promise<{ myParams: string[] }>
}
export async function generateMetadata( {params}:Props ) {
    const { myParams } = await params;
    const topic = myParams?.[0] ?? 'curated';
    return {
        title: `Results for ${ topic }`
    }
}

export default async function searchResults( {params}: Props ) {
    const { myParams } = await params;
    const topic = myParams?.[0] ?? 'curated';
    return(
        <>
            <Filters />
            <Suspense fallback={<span className="loader mx-auto"></span>}>
                <InitialGalleryLoad topic={ topic }/>
            </Suspense>
           
        </>
    )
}