'use client'
import { Photo } from '@/models/Images';
import{ useState } from 'react'
import DropDown from '../assets/DropDown';
import DownloadIcon from '../assets/DownloadIcon';

export default function Download({image}: {image:Photo}) {
    const handleDownload = async(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, imageUrl:string) => {
        e.preventDefault(); // Prevent default anchor behavior
        try {
          const response = await fetch(imageUrl, { mode: 'cors' });
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
  
          const a = document.createElement('a');
          a.href = url;
          a.download = 'image.jpg'; // Specify the default filename
          document.body.appendChild(a);
          a.click(); // Trigger the download
          document.body.removeChild(a);
          URL.revokeObjectURL(url); // Clean up the object URL
        } catch (error) {
          console.error('Failed to download the image:', error);
        }
    }
    const [DownloadClicked, setDownloadClicked] = useState(false);
    const toggleDownload = () => {
        setDownloadClicked(prev => !prev);
    }
  return (
    <div className='relative flex justify-end md:w-44'>
        
        <button 
        className="flex-1 px-2 md:px-6 p-2 md:py-3 text-white text-xs md:text-base bg-black active:bg-black/80 rounded-l-lg border-r border-gray-500">
            <a onClick={(e) => handleDownload(e, image.src.large)}>Download</a>
        </button>

        <button
        className='flex items-center px-3 bg-black active:bg-black/80 text-white rounded-r-lg'
        onClick={toggleDownload}
        >
            <div className={`inline-block transition-transform duration-300 ${DownloadClicked?'rotate-180':''}`}><DropDown /></div>
        </button>

        {DownloadClicked && (
            <div id="dropdown"
            className="absolute top-14 right-1 bg-white rounded-lg shadow w-32 md:w-44 animate-move-down">

            <ul className="py-2 text-sm text-gray-700" >

              <li className='flex justify-start items-center gap-1 p-2 hover:bg-gray-100 rounded-sm cursor-pointer '>
                <span className=''><DownloadIcon /></span>
                <a 
                onClick={(e)=>{
                    handleDownload(e, image.src.original)
                    toggleDownload()
                }}
                >Original</a>
              </li>

              <li className='flex justify-start items-center gap-1  p-2 hover:bg-gray-100 cursor-pointer '>
                <span className=''><DownloadIcon /></span>
                <a 
                onClick={(e)=>{
                    handleDownload(e, image.src.large2x)
                    toggleDownload()
                }}                
                >High Quality</a>
              </li>
              
              <li className='flex justify-start items-center gap-1 p-2 hover:bg-gray-100 cursor-pointer '>
                <span className=''><DownloadIcon /></span>
                <a 
                onClick={(e)=>{
                    handleDownload(e, image.src.large)
                    toggleDownload()
                }}
                >Medium</a>
              </li>
           
            </ul>
            
        </div>
        )}

    </div>

  )
}
