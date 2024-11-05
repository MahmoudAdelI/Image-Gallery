import fetchImages from "@/lib/fetchImages"
import type { ImagesResults } from "@/models/Images"
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import getPrevNextPages from "@/lib/getPrevNextPages";
import Footer from "./Footer";

type Props = {
  topic?: string | undefined,
  page?: string | undefined
}

export default async function Gallery({topic = 'curated', page}: Props) {
console.log(topic);
  let url

  // Browsing beyond home
  if( topic === 'curated' && page ) { 
    url = `https://api.pexels.com/v1/curated?page=${page}`
  };

  // Home if we passed nothing or undefined
  if( topic === 'curated' ) { 
    url = 'https://api.pexels.com/v1/curated'
  };

  // If there's no page it means we're on 1st search result page 
  if( !page ) { 
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  };

  // else means we're searching and on a page rather than the 1st
  url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;


                
  const images: ImagesResults | undefined = await fetchImages(url);
  // console.log(images);
  if(!images || images.per_page === 0) return <h2 className="m-4 text-2xl font-bold">Not Found</h2>
  const imagesWithBlur = await addBlurredDataUrls(images);

  // calculate pagination
  const {prevPage, nextPage, totalPages} = getPrevNextPages(images);
  const footerProps = {topic, page, prevPage, nextPage, totalPages}
  return (
    <>
    {/* auto-rows-[6px] sm:auto-rows-[10px] */}
      <section className="px-1 sm:my-3 grid gap-y-[3px] md:gap-y-2 justify-items-center grid-cols-2 md:grid-cols-gallery">
              {imagesWithBlur.map(photo => (
                  <ImageContainer key={photo.id} photo={photo}/>
              ))}
      </section>

      <Footer {...footerProps} />
    </>
  )
}
