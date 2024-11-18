'use client'
import fetchImages from "@/lib/fetchImages"
import { ImagesResults, Photo } from "@/models/Images"
import { useState, useEffect, useRef } from "react"
import ImageCard from "../ImageCard"

type Props = {
    topic?: string | undefined,
    initialImages: Photo[]
  }

export default function ClientGallery({topic = 'curated', initialImages}:Props) {
    const [images, setImages] = useState<Photo[]>(initialImages)
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(true)
    const requestInProgress = useRef(false) // to fetch data only once at a time 
    let url

    if (topic === 'curated' && page) {
        url = `https://api.pexels.com/v1/curated?page=${page}`;
      } else if (topic === 'curated') {
        url = 'https://api.pexels.com/v1/curated';
      } else if (!page) {
        url = `https://api.pexels.com/v1/search?query=${topic}`;
      } else {
        url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
      }
      

    useEffect(() => {
        
        const fetchAndProcessImages = async () => {
            if(requestInProgress.current) return; // if requestInProgress is true don't send the request
            requestInProgress.current = true // if it's false and we get here, lock fetching by setting requestInProgress to true
            const data: ImagesResults | undefined = await fetchImages(url);
            if(!data || data.per_page === 0) return;
            setImages(prev => [...prev, ...data.photos]);
            setLoading(false);
            requestInProgress.current = false // unlock fetching and make it ready for more request
        }
        fetchAndProcessImages();
        
    }, [url]);
    
    

    const handleScroll = async () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
      if (scrollHeight - scrollTop <= clientHeight + 50) { // 50px threshold
          setLoading(true);
          if(!requestInProgress.current){
            setPage((prev) => prev + 1);
          }
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      {/* <section className="px-2 mx-auto max-w-7xl flex flex-wrap gap-x-2 mb-10"> */}
      <section className="px-2 mx-auto max-w-7xl columns-2 md:columns-3 gap-2 mb-10">
                {images.map(photo => (
                    <ImageCard key={photo.id} photo={photo}/>
                ))}
      </section>
      
      {loading && <span className="mt-5 loader mx-auto"></span>}
    </div>
  )
}
