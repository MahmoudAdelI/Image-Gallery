import ScrollToTop from "@/app/components/client/ScrollToTop";
import ImageDetail from "@/app/components/ImageDetails";
import env from "@/lib/env";
import type { Photo } from "@/models/Images";


export async function generateMetadata({params}:{params: Promise<{id: string}>}) {
  const { id } = await params;

  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: env.PEXELS_API_KEY,
    },
  });

  const image: Photo = await res.json();

  return {
    title: `${image.photographer}'s Photo | Pixy`,
    description: `Check out this amazing photo by ${image.photographer} on Pixy.`,
    openGraph: {
      title: `${image.photographer}'s Photo | Pixy`,
      description: `Check out this amazing photo by ${image.photographer} on Pixy.`,
      images: [
        {
          url: image.src.large,
          width: image.width,          
          height: image.height,          
          alt: image.alt,       
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${image.photographer}'s Photo | Pixy`,
      description: `Check out this amazing photo by ${image.photographer} on Pixy.`,
      images: [image.src.large], 
    },
  };
}

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
      <ScrollToTop />
      <ImageDetail photo= {image} />
    </div>
  )
}
