import Gallery from "@/app/components/Gallery"

type Props = {
    params: {
        myParams: (string | undefined)[]
    }
}
//TEST ASYNC PARAMS
export async function generateMetadata( {params}:Props ) {
    const { myParams } = params;
    const topic = myParams?.[0] ?? 'curated';
    const page = myParams?.[1] ?? '1';
    return {
        title: `Results for ${ topic } - Page ${page}`
    }
}
export default async function searchResults( {params}: Props ) {
    const { myParams } = params;
    const topic = myParams?.[0] ?? 'curated';
    const page = myParams?.[1] ?? '1';
    return <Gallery topic={ topic } page={ page }/>
}