import  Image  from 'next/image'
import type { Photo } from '@/models/Images'
import Link from 'next/link';

type props = {
    photo: Photo
}

export default function ImageContainer({photo}: props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(300 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 2;
  return (
    <div className="w-[300px] sm:hover:scale-[1.03] sm:transition"
    style={{gridRow: `span ${photoSpans}`}}
    >
      <Link href={photo.url} target='_blank' className='grid place-content-center'>
        <div className='rounded-l overflow-hidden'>
            <Image
                alt={photo.alt} 
                src={photo.src.large} 
                height={photo.height}
                width={photo.width}
                sizes="300"
                placeholder='blur'
                blurDataURL={photo.blurredDataUrl}
                className='hover:opacity-75'
                />
        </div>
      </Link>
    </div>
    
  )
}
