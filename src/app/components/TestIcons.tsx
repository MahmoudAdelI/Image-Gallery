'use client'
import type { Photo } from "@/models/Images"
import { share } from "@/lib/shareImage";
import FacebookIcon from "@/app/assets/FacebookIcon";
import TwitterIcon from "@/app/assets/TwitterIcon";
import WhatsappIcon from "@/app/assets/WhatsappIcon";
export interface ImageDetailProps {
    image: Photo;
}

export default function TestIcons({image}:ImageDetailProps) {
  return (
    <div id='icons' className={'flex justify-center items-center gap-10 mt-10'}>

        <span onClick={() => share(image.url, 'FACEBOOK')}
            className='icon text-blue-800 '
            >
            <FacebookIcon />
        </span>

        <span onClick={() => share(image.url, 'TWITTER')}
            className='icon'
            >
            <TwitterIcon />
        </span>

        <span onClick={() => share(image.url, 'WHATSAPP')}
            className='icon text-green-600'
            >
            <WhatsappIcon />
        </span>

    </div> 
  )
}
