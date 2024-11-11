import type { Photo } from "@/models/Images"
import Image from 'next/image';

interface ImageDetailProps {
  photo: Photo;
}
export default function ImageDetail({ photo } : ImageDetailProps) {
  return (
    <div>
      <h1 className='font-bold text-2xl text-center my-10'>
        {photo.alt}
      </h1>
      <div 
      className={`relative mx-auto my-10`}>
      <Image
        src={photo.src.large2x}
        alt={photo.alt}
        // fill={true}
        // className='object-cover '
        width={photo.width}
        height={photo.height}
        className={`max-h-[900px] object-contain`}
      />
      </div>
    </div>
  );
};
