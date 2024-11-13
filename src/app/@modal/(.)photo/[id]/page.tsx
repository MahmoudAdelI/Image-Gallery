import Download from "@/app/components/Download";
import Modal from "@/app/components/Modal";
import ModalCloser from "@/app/components/ModalCloser";
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

    <Modal>
      <div className="relative py-10 bg-white h-full rounded-t-lg">
      <ModalCloser />
        <header className="absolute top-12 md:top-0 flex justify-between p-2 md:p-4 w-full">

          <section id="photographer" className="flex justify-between items-center">
            <div id="avatar" className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full text-white mr-2">
              <span className="text-lg md:text-2xl">{image.photographer[0]}</span>
            </div>
            <div id="name" className="font-semibold inline-block capitalize text-sm md:text-lg">
              {image.photographer}
            </div>
          </section>

          <section id="buttons" className="flex md:flex-row gap-2 items-center md:gap-6 box-border">
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
          
    </Modal>

  )
}
