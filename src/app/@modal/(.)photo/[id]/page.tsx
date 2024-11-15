import Download from "@/app/components/Download";
import ImageModal from "@/app/components/ImageModal";
import ModalCloser from "@/app/components/ModalCloser";
import Photographer from "@/app/components/Photographer";
import ShareModal from "@/app/components/ShareModal";
import env from "@/lib/env";
import type { Photo } from "@/models/Images";
import Image from "next/image";

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
      <div className="relative py-10 bg-white h-full rounded-t-lg">
      <ModalCloser />
        <header className="absolute top-12 md:top-0 flex justify-between p-2 md:p-4 w-full">
        <div className="font-normal my-auto text-sm md:text-lg text-gray-600 hover:text-gray-900">
          <Photographer image={image}/>
        </div>

          <section id="buttons" className="flex gap-2 items-center md:gap-6">
            <ShareModal image={image} />
            <Download image={image} />
          </section>
            
        </header>

        <Image
        src={image.src.large}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={`h-full px-2 md:h-[85vh] sm:mt-14 object-contain`}
        />
      </div>
          
    </ImageModal>

  )
}
