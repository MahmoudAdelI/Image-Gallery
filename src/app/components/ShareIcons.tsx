'use client'
// import type { Photo } from "@/models/Images"
import { share } from "@/lib/shareImage";
import FacebookIcon from "@/app/assets/FacebookIcon";
import TwitterIcon from "@/app/assets/TwitterIcon";
import WhatsappIcon from "@/app/assets/WhatsappIcon";
import { usePathname } from "next/navigation";
// export interface ImageDetailProps {
//     image: Photo;
// }
// TestIcons({image}:ImageDetailProps)

export default function ShareIcons() {
    const currentPathname = usePathname();

  return (
    <div id='icons' className={'flex justify-center items-center gap-10 mt-10'}>

        <span onClick={() => share(currentPathname, 'FACEBOOK')}
            className='icon text-blue-800 '
            >
            <FacebookIcon />
        </span>

        <span onClick={() => share(currentPathname, 'TWITTER')}
            className='icon'
            >
            <TwitterIcon />
        </span>

        <span onClick={() => share(currentPathname, 'WHATSAPP')}
            className='icon text-green-600'
            >
            <WhatsappIcon />
        </span>

    </div> 
  )
}
