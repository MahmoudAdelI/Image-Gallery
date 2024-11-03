import fetchImages from "@/lib/fetchImages"
import type { ImagesResults } from "@/models/Images"
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined
}

export default async function Gallery({topic}: Props) {
    const url = !topic
                ? 'https://api.pexels.com/v1/curated'
                : `https://api.pexels.com/v1/search?query=${topic}`;
                
    const images: ImagesResults | undefined = await fetchImages(url);
    if(!images) return <h2 className="m-4 text-2xl font-bold">Not Found</h2>
    const imagesWithBlur = await addBlurredDataUrls(images);
  return (
    <section className="px-1 my-3 grid justify-items-center grid-cols-gallery auto-rows-[10px]">
            {imagesWithBlur.map(photo => (
                <ImageContainer key={photo.id} photo={photo}/>
            ))}
    </section>
  )
}
