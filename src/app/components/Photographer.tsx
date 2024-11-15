import type { Photo } from "@/models/Images"
import Link from "next/link"
export default function Photographer({image}:{image: Photo}) {

  return (
    <Link href={image.photographer_url} target="_blank"
    className="flex gap-1 md:gap-2 items-center justify-center">

            <div id="avatar" className="inline-flex items-center justify-center w-[1.7em] h-[1.7em] md:w-[2em] md:h-[2em] bg-gray-200 rounded-full text-gray-800">
              <span className="text-[.8em] font-semibold">{image.photographer[0].toUpperCase()}</span>
            </div>
           
            <div id="name" className='inline-block capitalize text-inherit cursor-pointer'>
              {image.photographer}
            </div>

    </Link>
  )
}
