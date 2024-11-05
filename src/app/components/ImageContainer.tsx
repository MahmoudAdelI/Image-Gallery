import  Image  from 'next/image'
import type { Photo } from '@/models/Images'
import Link from 'next/link';

type props = {
    photo: Photo
}

export default function ImageContainer({photo}: props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(380 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 9);
  return (
    <div className="w-[95%] sm:hover:scale-[1.02] sm:transition"
    style={{gridRow: `span ${photoSpans}`}}
    >
      <Link href={photo.src.large2x} download target='_blank' className='grid place-content-center'>
        <div className='relative rounded overflow-hidden '>
            <Image
                alt={photo.alt} 
                src={photo.src.large2x} 
                height={photo.height}
                width={photo.width}
                sizes="380"
                placeholder='blur'
                blurDataURL={photo.blurredDataUrl}
                />
                <div className='image-hover'></div>

        </div>
      </Link>

    </div>
    
  )
}
