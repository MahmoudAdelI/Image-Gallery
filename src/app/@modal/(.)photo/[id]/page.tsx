import Download from "@/app/components/Download";
import ImageModal from "@/app/components/ImageModal";
import ModalCloser from "@/app/components/ModalCloser";
import Photographer from "@/app/components/Photographer";
import ShareModal from "@/app/components/ShareModal";
import env from "@/lib/env";
import type { Photo } from "@/models/Images";

export default async function Intersepter({params}:{params: Promise<{id: string}>}) {
  const {id} = await params;
  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    cache: 'force-cache',
    headers: {
        Authorization: env.PEXELS_API_KEY
    }
});
  const image:Photo = await res.json();
  return (

    <ImageModal>
      <ModalCloser />
      <div className="relative py-10 bg-white h-full rounded-t-lg flex flex-col">
        <header className="flex justify-between px-2 md:px-4 mb-10 w-full h-auto">
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
        className={`h-full px-2 md:h-[82vh] object-contain`}
        />
      </div>
          
    </ImageModal>

  )
}
