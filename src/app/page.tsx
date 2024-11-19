import { Suspense } from "react"
import Filters from "./components/Filters"
import Hero from "./components/Hero"
import InitialGalleryLoad from "./components/infinit scrolling test/InitialGalleryLoad"
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
