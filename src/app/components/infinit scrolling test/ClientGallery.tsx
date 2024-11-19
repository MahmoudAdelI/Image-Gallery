'use client'
import fetchImages from "@/lib/fetchImages"
import { ImagesResults, Photo } from "@/models/Images"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import ImageCard from "../ImageCard"
import Masonry from 'react-masonry-css'
import debounce from 'lodash/debounce';

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
    
    

    const handleScroll = useCallback(
      async () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
      if (scrollHeight - scrollTop <= clientHeight + 50) { // 50px threshold
          setLoading(true);
          if(!requestInProgress.current){
            setPage((prev) => prev + 1);
          }
        }
      }
    ,[]) 

    const debouncedHandleScroll = useMemo(
      () => debounce(handleScroll, 200),
      [handleScroll]
    );

    useEffect(() => {
      window.addEventListener("scroll", debouncedHandleScroll);
      window.addEventListener("resize", debouncedHandleScroll);
      return () => {
        debouncedHandleScroll.cancel();
        window.removeEventListener("scroll", debouncedHandleScroll);
        window.removeEventListener("resize", debouncedHandleScroll);
      }
  }, [debouncedHandleScroll]);

  return (
    <div className="flex flex-col">

      <div className="px-2 mx-auto max-w-7xl">
      <Masonry
        breakpointCols={{default: 3, 450: 2}}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {images.map(photo => (
                    <ImageCard key={photo.id} photo={photo}/>
                ))}
      </Masonry>
      </div>
      
      {loading && <span className="mt-5 loader mx-auto"></span>}
    </div>
  )
}
