import { Suspense } from "react"
import Filters from "./components/gallery/Filters"
import Hero from "./components/header/Hero"
import InitialGalleryLoad from "./components/gallery/InitialGalleryLoad"
export default function Home() {
  return(
    <>
      <Hero />
      <Filters />
      <Suspense fallback={<span className="loader mx-auto"></span>}>
        <InitialGalleryLoad />
      </Suspense>
    </>
  )
  
}
