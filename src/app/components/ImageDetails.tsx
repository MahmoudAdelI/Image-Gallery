import type { Photo } from "@/models/Images"
import Image from 'next/image';
import Photographer from "./Photographer";
import Download from "./Download";
import ShareModal from "./ShareModal";
import ClientGallery from "./infinit scrolling test/ClientGallery";

interface ImageDetailProps {
  photo: Photo;
}
export default function ImageDetail({ photo } : ImageDetailProps) {
  const searchTopic = photo.alt.split(' ');
  return (
    <>
    <div id="container"
    className="lg:max-w-6xl lg:h-[70vh] lg:mt-[10vh] flex flex-col items-center justify-center lg:flex-row lg:mx-auto rounded-xl shadow-lg "
    >
      <section className="lg:w-1/2 h-full">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className={`h-full object-contain`}
      />
      </section>

      <section className="lg:w-1/2 p-4 h-full relative">

        <div className="flex gap-2 justify-end">
          <ShareModal/>
          {/* <ShareModal image={photo}/> */}
          <Download image={photo}/>
        </div>

        <h1 className="text-2xl font-semibold my-6">
          {photo.alt}
        </h1>
        <h2 className="text-gray-700 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ea aliquam dolores, et ad deleniti tenetur atque amet consectetur adipisicing elit.
          enim error commodi cupiditate.
        </h2>
        <div className="flex justify-start text-gray-600 hover:text-gray-900">
          <Photographer image={photo}/>
        </div>
      </section>
    </div>

      <h2 className="text-2xl font-semibold text-center my-10">More to explore</h2>  
    <ClientGallery topic={`${searchTopic.slice(0,6).join(' ')}`}/>
    </>
  );
};
