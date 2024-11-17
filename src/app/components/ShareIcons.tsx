'use client'
// import type { Photo } from "@/models/Images"
import { share } from "@/lib/shareImage";
import FacebookIcon from "@/app/assets/FacebookIcon";
import TwitterIcon from "@/app/assets/TwitterIcon";
import WhatsappIcon from "@/app/assets/WhatsappIcon";
// export interface ImageDetailProps {
//     image: Photo;
// }
// TestIcons({image}:ImageDetailProps)

export default function ShareIcons() {
    
    const shareURL = window.location.href;

  return (
    <div id='icons' className={'flex justify-center items-center gap-10 mt-10'}>

        <span onClick={() => share(shareURL, 'FACEBOOK')}
            className='icon text-blue-800 '
            >
            <FacebookIcon />
        </span>

        <span onClick={() => share(shareURL, 'TWITTER')}
            className='icon'
            >
            <TwitterIcon />
        </span>

        <span onClick={() => share(shareURL, 'WHATSAPP')}
            className='icon text-green-600'
            >
            <WhatsappIcon />
        </span>

    </div> 
  )
}
