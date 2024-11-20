'use client'
import { share } from "@/lib/shareImage";
import FacebookIcon from "@/app/assets/FacebookIcon";
import TwitterIcon from "@/app/assets/TwitterIcon";
import WhatsappIcon from "@/app/assets/WhatsappIcon";
import Arrow from "../assets/Arrow";


export default function ShareIcons() {
    
    const shareURL = window.location.href;

  return (
    <div id='icons' className={'flex flex-col gap-4 my-[10%] mx-4 select-none'}>
        <div
        onClick={() => share(shareURL, 'FACEBOOK')}
        className="active:bg-gray-100 border active:border-gray-400 border-gray-200 rounded-lg w-full flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-2 items-center">
                <span className='text-blue-800'>
                    <FacebookIcon width={32} height={32} />
                </span>
                <p className="font-normal text-lg">Share on Facebook</p>
            </div>
            <div className="rotate-[270deg]">
                <Arrow />
            </div>
        </div>

        <div
         onClick={() => share(shareURL, 'TWITTER')}
         className="active:bg-gray-100 border active:border-gray-400 border-gray-200 rounded-lg w-full flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-2 items-center">
                <span className="text-white bg-black rounded-lg p-1">
                    <TwitterIcon width={24} height={24} />
                </span>
                <p className="font-normal text-lg">Share on X</p>
            </div>
            <div className="rotate-[270deg]">
                <Arrow />
            </div>
        </div>

        <div
        onClick={() => share(shareURL, 'WHATSAPP')}
        className="active:bg-gray-100 border active:border-gray-400 border-gray-200 rounded-lg w-full flex items-center justify-between p-2 cursor-pointer">
            <div className="flex gap-2 items-center">
                <span className='text-green-600'>
                    <WhatsappIcon width={32} height={32} />
                </span>
                <p className="font-normal text-lg">Share on Watsapp</p>
            </div>
            <div className="rotate-[270deg]">
                <Arrow />
            </div>
        </div>

    </div> 
  )
}
