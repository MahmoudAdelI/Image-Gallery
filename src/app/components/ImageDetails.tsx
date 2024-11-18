import type { Photo } from "@/models/Images"
import Photographer from "./Photographer";
import Download from "./Download";
import ShareModal from "./ShareModal";
import InitialGalleryLoad from "./infinit scrolling test/InitialGalleryLoad";

interface ImageDetailProps {
  photo: Photo;
}
export default function ImageDetail({ photo } : ImageDetailProps) {
  const searchTopic = photo.alt.split(' ');
  const topic = photo.alt? `${searchTopic.slice(0,6).join(' ')}` : 'curated';
  
  return (
    <>
    <div id="container"
    className="lg:max-w-6xl  lg:h-[70vh] lg:mt-[10vh] flex flex-col items-center justify-center md:flex-row lg:mx-auto rounded-xl shadow-lg "
    >
      <section className="m-2 md:w-1/2 h-full">
      <img
        src={photo.src.large}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className={`h-full object-contain`}
      />
      </section>

      <section className="lg:w-1/2 p-4 h-full relative">
    <div className="flex justify-between items-center">
        <h1 className="md:text-2xl font-semibold flex-auto">
          {photo.alt}
        </h1>

        <div className="flex gap-2 justify-end flex-auto">
          <ShareModal/>
          <Download image={photo}/>
        </div>

    </div>
        <h2 className="text-sm md:text-base text-gray-700 my-4">
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
      <InitialGalleryLoad topic={topic} />
    </>
  );
};
