import Gallery from "@/app/components/Gallery"
import Loading from "@/app/Loading";
import { Suspense } from "react";

type Props = {
    params: Promise<{
        myParams: (string | undefined)[]
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
    return<Suspense fallback={<Loading />}><Gallery topic={ topic } page={ page }/></Suspense>
}