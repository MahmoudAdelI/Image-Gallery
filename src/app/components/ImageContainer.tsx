'use client'
import  Image  from 'next/image'
import type { Photo } from '@/models/Images'
//import Link from 'next/link';
import { useState } from 'react';


type props = {
    photo: Photo
}

export default function ImageContainer({photo}: props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(380 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 9);

  const share = (imageUrl: string, platform: string) => {

    let platformUrl: string = '';
    switch (platform) {
      case 'FACEBOOK' :
        platformUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`;
        break;
      
      case 'TWITTER':
        platformUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(imageUrl)}`;
        break;
    }
     
        window.open(platformUrl, '_blank');
  }
  const [menue, setMenue] = useState(false);

  const toggleMenue = () => {
    setMenue(!menue)
  };
  console.log(menue);

  return (
    <div className="w-[95%] sm:hover:scale-[1.02] transition-opacity"
    style={{gridRow: `span ${photoSpans}`}}
    >


      {/* <Link href={photo.src.large2x} download target='_blank' className=''> */}
          
        <div className='relative rounded overflow-hidden text-white'
        onClick={toggleMenue}>
            <Image
                alt={photo.alt} 
                src={photo.src.medium} 
                height={photo.height}
                width={photo.width}
                sizes="380"
                placeholder='blur'
                blurDataURL={photo.blurredDataUrl}
                />
                <div className={`${menue? 'image-hover':''}`}></div>

                <div id='menue-icon' className={`absolute top-8 md:top-10 right-2 md:right-4 md:scale-[1.5] transition-transform duration-300 ${menue?'rotate-[270deg]':''}`} onClick={toggleMenue}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical" id="More-Vertical--Streamline-Feather" height={18} width={18} ><desc>{"More Vertical Streamline Icon: https://streamlinehq.com"}</desc><path d="M6.875 7.5a0.625 0.625 0 1 0 1.25 0 0.625 0.625 0 1 0 -1.25 0" strokeWidth={1} /><path d="M6.875 3.125a0.625 0.625 0 1 0 1.25 0 0.625 0.625 0 1 0 -1.25 0" strokeWidth={1} /><path d="M6.875 11.875a0.625 0.625 0 1 0 1.25 0 0.625 0.625 0 1 0 -1.25 0" strokeWidth={1} /></svg>
                </div>

                {menue && (

                <div id='icons' className={`absolute top-20 md:top-24 right-0 px-2 md:px-4 py-4 flex flex-col gap-4 md:scale-[1.5] border-l border-white border-opacity-20 bg-white bg-opacity-10 animate-ease-to-left shadow-inner`}>

                  <span onClick={() => share(photo.src.large2x, 'FACEBOOK')}
                    className='transition-transform shadow-xl hover:scale-110 active:scale-95'
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Facebook-1--Streamline-Plump" height={18} width={18} ><desc>{"Facebook 1 Streamline Icon: https://streamlinehq.com"}</desc><g id="facebook-1--media-facebook-social"><path id="Subtract" fill="#ffffff" d="M29.5054 46.4452c0.007 -0.0664 0.0106 -0.1339 0.0106 -0.2021V30.0396h5.5389c0.8881 0 1.6875 -0.5848 1.8173 -1.4633 0.2147 -1.4533 0.1235 -2.7748 -0.0154 -3.7145 -0.1275 -0.8627 -0.8963 -1.4306 -1.7683 -1.4306H29.516c0 -4.9935 0.831 -5.7201 5.5149 -5.811 0.8987 -0.0174 1.7055 -0.6108 1.8359 -1.5002 0.2193 -1.495 0.1319 -2.8012 -0.0057 -3.7201 -0.1271 -0.8488 -0.8882 -1.4021 -1.7464 -1.3946 -8.2784 0.0722 -12.9934 1.051 -12.9934 12.4259h-4.2888c-0.8335 0 -1.5735 0.5224 -1.6996 1.3463 -0.1358 0.8877 -0.2179 2.1744 0.0088 3.7394 0.131 0.9041 0.9442 1.5227 1.8578 1.5227h4.1218v16.4543c-6.41 -0.0421 -10.9981 -0.2951 -13.9856 -0.5378 -3.28785 -0.2671 -5.82468 -2.804 -6.09181 -6.0918C1.77808 36.5927 1.5 31.4014 1.5 24c0 -7.4014 0.27808 -12.5927 0.54389 -15.8643 0.26713 -3.28786 2.80396 -5.82468 6.09182 -6.09181C11.4073 1.77807 16.5986 1.5 24 1.5c7.4014 0 12.5927 0.27808 15.8643 0.54389 3.2878 0.26713 5.8247 2.80396 6.0918 6.09181 0.2658 3.2716 0.5439 8.4629 0.5439 15.8643 0 7.4014 -0.2781 12.5927 -0.5439 15.8643 -0.2671 3.2879 -2.804 5.8247 -6.0918 6.0918 -2.3904 0.1942 -5.8056 0.395 -10.3589 0.4891Z" strokeWidth={1} /></g></svg>
                  </span>

                  <span onClick={() => share(photo.src.large2x, 'TWITTER')}
                    className='transition-transform shadow-xl hover:scale-110 active:scale-95'
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="X-Twitter-Logo--Streamline-Logos" height={18} width={18} ><desc>{"X Twitter Logo Streamline Icon: https://streamlinehq.com"}</desc><path fill="#ffffff" fillRule="evenodd" d="m13.458 9.12244 7.5158 -7.9657h2.4916l-0.0107 0.01176 -8.8892 9.424 8.1385 10.8018c0.2068 0.2744 0.2405 0.6422 0.0872 0.9498 -0.1435 0.2878 -0.4278 0.4764 -0.7453 0.4994h-5.0964c-0.2598 -0.0188 -0.5001 -0.1488 -0.6582 -0.3585l-5.7269 -7.6011 -7.47199 7.9596H0.534546l8.922324 -9.4297L1.31843 2.61205c-0.20678 -0.27444 -0.24055 -0.64223 -0.08721 -0.94974 0.15333 -0.30752 0.4674 -0.50186 0.81102 -0.50186h4.96503c0.28455 0 0.55258 0.13365 0.72381 0.36092L13.458 9.12244Zm-0.7628 1.99966c-0.0257 -0.0299 -0.0491 -0.0611 -0.0703 -0.0934L6.55538 2.97297H3.85973L17.467 21.0334h2.6957l-7.4675 -9.9113Z" clipRule="evenodd" strokeWidth={1} /></svg>
                  </span>

                </div>
                )}
                
        </div>
      {/* </Link> */}



    </div>
    
  )
}
