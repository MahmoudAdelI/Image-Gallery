import type { ImagesResults } from "@/models/Images";

const getPageNumber = (url: string) => {
    const {searchParams} = new URL(url);
    return searchParams.get('page')
}

export default function getPrevNextPages(images: ImagesResults) {
  
    let nextPage = images?.next_page
        ? getPageNumber(images.next_page)
        : null;

    const prevPage = images?.prev_page
        ? getPageNumber(images.prev_page)
        : null;

    const totalPages = Math.ceil(images.total_results / images.per_page)


    //if there's another page to load we load it
    if(prevPage && parseInt(prevPage) + 2 < totalPages) {
        nextPage = (parseInt(prevPage) + 2).toString();
    }
    //if there's not, next page is null
    if(nextPage && parseInt(nextPage) >= totalPages + 1) nextPage = null;

    return {prevPage, nextPage, totalPages}
    
}
