import Link from "next/link"

type Props = {
    topic: string,
    page: string | undefined,
    prevPage: string | null,
    nextPage: string | null,
    totalPages: number
}

export default function Footer({topic, page, prevPage, nextPage, totalPages}: Props) {
    
    if(!prevPage && !nextPage) return;
    const pageNums: number[] = [];
    if(prevPage && nextPage && totalPages){
        for(let i = parseInt(prevPage) + 1; i < parseInt(prevPage) + 6 && i <= totalPages; i++){
            pageNums.push(i)
        }
    };
    //console.log(pageNums);
    const nextPageArea = nextPage
    ? (
        <Link href={`/results/${topic}/${nextPage}`}
        className={!prevPage? 'mx-auto p-2 border rounded-md hover:rounded-lg hover:bg-black hover:text-white active:bg-black/80 transition-all duration-300 ease-out':''}
        >
            {!prevPage? 'show more': <span className="next-back ml-2">next</span>}

        </Link>
    )
    : null

    const prevPageArea = prevPage
    ? (
        <>
            <Link href={`/results/${topic}/${prevPage}`}
            className={!nextPage? 'mx-auto':''}
            >
               <span className="next-back mr-2">back</span>
            </Link>

            <div className="flex gap-2">
                {pageNums.map((num, i) => (
                    page && num === parseInt(page)
                    ? <span key={i}
                    className="p-2 btn"
                    >
                        {num}
                    </span>
                    : (
                        <Link key={i} href={`/results/${topic}/${num}`}
                        className=" p-2 btn bg-gray-200"
                        >
                            {num}
                        </Link>
                    )
                ))}
            </div>

        </>
    )
    : null

  return (
    <footer className="flex flex-row justify-between items-center px-2 py-4 text-sm sm:text-lg w-80 sm:w-96 mx-auto">
        {prevPageArea}
        {nextPageArea}
    </footer>
  )
}
