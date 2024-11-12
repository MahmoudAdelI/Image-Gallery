import ImageDetail from "@/app/components/ImageDetails";
import env from "@/lib/env";
import type { Photo } from "@/models/Images";

export default async function PhotoDetails({params}:{params: Promise<{id: string}>}) {
  const {id} = await params;
  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    cache: 'force-cache',
    headers: {
        Authorization: env.PEXELS_API_KEY
    }
});
  const image:Photo = await res.json();
  return (
    <div>
      <ImageDetail photo = {image} />
      
    </div>
  )
}
