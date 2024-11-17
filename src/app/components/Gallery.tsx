import fetchImages from "@/lib/fetchImages"
import type { ImagesResults } from "@/models/Images"
import ImageCard from "./ImageCard";
import addBlurredDataUrls from "@/lib/getBase64";
import getPrevNextPages from "@/lib/getPrevNextPages";
import Footer from "./Footer";

type Props = {
  topic?: string | undefined,
  page?: string | undefined
}

export default async function Gallery({topic = 'curated', page}: Props) {
// console.log(topic);
  let url
  if (topic === 'curated' && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === 'curated') {
    url = 'https://api.pexels.com/v1/curated';
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }
                
  const images: ImagesResults | undefined = await fetchImages(url);
  // console.log(images);
  if(!images || images.per_page === 0) return <h2 className="m-4 text-2xl font-bold">Not Found</h2>
  const imagesWithBlur = await addBlurredDataUrls(images);

  // calculate pagination
  const {prevPage, nextPage, totalPages} = getPrevNextPages(images);
  const footerProps = {topic, page, prevPage, nextPage, totalPages}
  return (
    <>
      <section className="px-2 mx-auto max-w-7xl columns-2 md:columns-3 gap-2">
              {imagesWithBlur.map(photo => (
                  <ImageCard key={photo.id} photo={photo}/>
              ))}
      </section>

      <Footer {...footerProps} />
    </>
  )
}
