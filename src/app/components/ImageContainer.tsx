'use client'
import  Image  from 'next/image'
import type { Photo } from '@/models/Images'
import { useState } from 'react';
import FacebookIcon from '../assets/FacebookIcon';
import TwitterIcon from '../assets/TwitterIcon';
import MenueIcon from '../assets/MenueIcon';
import WhatsappIcon from '../assets/WhatsappIcon';


type props = {
    photo: Photo
}

export default function ImageContainer({photo}: props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(380 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 9);

  const share = (imageUrl: string, platform: string) => {

    let platformUrl: string = '';
    const message = 'Check out this amazing image!';
    switch (platform) {
      case 'FACEBOOK' :
        platformUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`;
        break;
      
      case 'TWITTER':
        platformUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(imageUrl)}`;
        break;

      case 'WHATSAPP':
        platformUrl = `https://wa.me/?text=${encodeURIComponent(message)}%20${encodeURIComponent(imageUrl)}`;
        break;
      
    }
     
        window.open(platformUrl, '_blank');
  }
  const [menue, setMenue] = useState(false);

  const toggleMenue = () => {
    setMenue(!menue)
  };

  return (
    <div className="w-[95%] sm:hover:scale-[1.02] transition-opacity"
    style={{gridRow: `span ${photoSpans}`}}
    >
          
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

                <div id='menue-icon' className={`absolute top-2 md:top-10 right-0 px-2 md:px-4 md:scale-[1.7] transition-transform duration-300 ${menue?'rotate-[270deg]':''}`} onClick={toggleMenue}>
                <MenueIcon />
                </div>

                {menue && (

                <div id='icons' className={'icons-container'}>

                  <span onClick={() => share(photo.url, 'FACEBOOK')}
                    className='icon'
                    >
                     <FacebookIcon />
                  </span>

                  <span onClick={() => share(photo.url, 'TWITTER')}
                    className='icon'
                    >
                    <TwitterIcon />
                  </span>

                  <span onClick={() => share(photo.url, 'WHATSAPP')}
                    className='icon'
                    >
                    <WhatsappIcon />
                  </span>

                </div>
                )}
                
        </div>

    </div>
    
  )
}
