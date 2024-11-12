'use client'
import  Image  from 'next/image'
import type { Photo } from '@/models/Images'

import { useRouter } from 'next/navigation';


type props = {
    photo: Photo
}

export default function ImageContainer({photo}: props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(380 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 9);
  
  const router = useRouter();
  const openPhoto = () => {
    router.push(`/photo/${photo.id.toString()}`)
  }

  return (
    <div className="w-[95%] h-[95%] sm:hover:scale-[1.02] transition-all duration-300 ease-linear"
    style={{gridRow: `span ${photoSpans}`}}
    >
          
        <div className={`relative flex flex-col justify-center rounded overflow-hidden text-white`}
        onClick={openPhoto}>
            <Image
                alt={photo.alt} 
                src={photo.src.large} 
                height={photo.height}
                width={photo.width}
                sizes="(min-width: 1420px) 403px, (min-width: 1160px) calc(15.83vw + 181px), 47.5vw"
                placeholder='blur'
                blurDataURL={photo.blurredDataUrl}
                />
    
        </div>

    </div>
    
  )
}
