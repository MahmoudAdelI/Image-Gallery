import Download from "@/app/components/image-interactions/Download";
import ImageModal from "@/app/components/image-interactions/ImageModal";
import ModalCloser from "@/app/components/client-helper-components/ModalCloser";
import Photographer from "@/app/components/image-interactions/Photographer";
import env from "@/lib/env";
import type { Photo } from "@/models/Images";
import ShareModal from "@/app/components/image-interactions/ShareModal";
import InitialGalleryLoad from "@/app/components/gallery/InitialGalleryLoad";

export default async function Intersepter({params}:{params: Promise<{id: string}>}) {
  const {id} = await params;
  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    cache: 'force-cache',
    headers: {
        Authorization: env.PEXELS_API_KEY
    }
});
  const image:Photo = await res.json();
  const searchTopic = image.alt.split(' ');
  const topic = image.alt? `${searchTopic.slice(0,6).join(' ')}` : 'curated';
  return (

    <ImageModal>
      <div className="relative pt-10  rounded-t-lg flex flex-col">
        <header className="flex justify-between px-2 md:px-4 my-5 w-full h-auto">
        <ModalCloser />
        <div className="font-bold my-auto text-sm md:text-lg text-gray-600 hover:text-gray-900">
          <Photographer image={image}/>
        </div>

          <section id="buttons" className="flex gap-2 items-center md:gap-6">
            <ShareModal/>
            <Download image={image} />
          </section>
            
        </header>
          <img
          src={image.src.large}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading='lazy'
          className={`px-2 md:h-[82vh] object-contain`}
          />
      </div>
      <h2 className="text-2xl font-semibold text-center my-10">More to explore</h2>  
      <InitialGalleryLoad topic={topic} />
    </ImageModal>

  )
}
