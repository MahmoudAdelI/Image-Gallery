'use client'
// import  Image  from 'next/image'
import type { Photo } from '@/models/Images'
import { useRouter } from 'next/navigation';
import { downloadImage } from '@/lib/downloadImage';
import Photographer from './Photographer';
import DownloadIcon from '../assets/DownloadIcon';


type props = {
    photo: Photo
}

export default function ImageCard({photo}: props) {
  const router = useRouter();
  const openPhoto = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    // Check if the clicked element is the card itself or if the card contains the target
    if (target.closest('button') || target.closest('a')) {
      return; // Prevent navigation if a button or link is clicked
    }
    
      router.push(`/photo/${photo.id.toString()}`)
      document.body.style.overflow = "hidden";
    
  }
  return (
    <div
    style={{backgroundColor: photo.avg_color}}
    onClick={openPhoto} className="cursor-zoom-in relative mb-2 sm:hover:scale-[1.01] transition-all duration-200 ease-linear">
            <img
                alt={photo.alt} 
                src={photo.src.large} 
                height={photo.height}
                width={photo.width}
                sizes="(min-width: 1420px) 403px, (min-width: 1160px) calc(15.83vw + 181px), 47.5vw"
                loading='lazy'
                />
         
                <div className='hidden md:block absolute inset-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-dark-gradient transition duration-200'>
                  <section
                  className='absolute bottom-2 right-2 md:bottom-4 md:right-4 p-1 md:p-2 text-white cursor-pointer opacity-70  hover:opacity-100 bg-black/50 rounded-full transition duration-100'
                  onClick={e => downloadImage(e, photo.src.large)}
                  >
                  <DownloadIcon />
                  </section>

                  <section className='absolute bottom-2 left-2 md:bottom-4 md:left-4 text-white opacity-80 hover:opacity-100 text-[10px] md:text-sm transition duration-100'>
                    <Photographer image={photo}/> 
                  </section>
                </div>
    </div>
    
  )
}
