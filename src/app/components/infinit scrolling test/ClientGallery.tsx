'use client'
import fetchImages from "@/lib/fetchImages"
import { ImagesResults, Photo } from "@/models/Images"
import { useState, useEffect} from "react"
import ImageCard from "../ImageCard"
import Masonry from 'react-masonry-css'
import { useInView } from "react-intersection-observer"

type Props = {
    topic?: string | undefined,
    initialImages: Photo[]
  }

export default function ClientGallery({topic = 'curated', initialImages}:Props) {
    const [images, setImages] = useState<Photo[]>(initialImages)
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(false)
    const { ref, inView } = useInView(); // Intersection Observer

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
            if(loading) return; // if loading is true don't send the request
            setLoading(true);

            const data: ImagesResults | undefined = await fetchImages(url);
            if(!data || data.per_page === 0){
              setLoading(false);
              return;
            }

            setImages(prev => [...prev, ...data.photos]);
            setLoading(false);
        }

        fetchAndProcessImages();
        
    }, [url]);
    
    useEffect(() => {
      if (inView && !loading) {
        setPage((prev) => prev + 1);
      }
    }, [inView, loading]);
    

  return (
    <div className="flex flex-col">

      <div className="px-2 mx-auto max-w-7xl">
        <Masonry
          breakpointCols={{default: 3, 768: 2}}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {images.map(photo => (
                      <ImageCard key={photo.id} photo={photo}/>
                  ))}
        </Masonry>
      </div>

      <div ref={ref} className="mt-16">
        <span className="loader"></span>
      </div>
    </div>
  )
}
