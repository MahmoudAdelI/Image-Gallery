import { ImagesResults } from "@/models/Images";
import InfinteScrollGallery from "./InfinteScrollGallery";
import fetchImages from "@/lib/fetchImages";
type Props = {
    topic?: string | undefined,
    page?: string | undefined
  }
  
export default async function InitialGalleryLoad({topic = 'curated', page='1'}:Props) {
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
    const initialImages: ImagesResults | undefined = await fetchImages(url);
    if(!initialImages) return;
    
  return (
    <InfinteScrollGallery topic={ topic } initialImages={initialImages?.photos}/>
  )
}
