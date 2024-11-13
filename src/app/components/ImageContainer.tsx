'use client'
import  Image  from 'next/image'
import type { Photo } from '@/models/Images'

import { useRouter } from 'next/navigation';


type props = {
    photo: Photo
}

export default function ImageContainer({photo}: props) {
  const router = useRouter();
  const openPhoto = () => {
    router.push(`/photo/${photo.id.toString()}`)
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="mb-2 sm:hover:scale-[1.01] transition-all duration-200 ease-linear">

        <div className={`flex flex-col justify-center rounded`}
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
