// import { Suspense } from "react"
// import Gallery from "./components/Gallery"
// import Loading from "./loading"
// import { Suspense } from "react"
import Filters from "./components/Filters"
import Hero from "./components/Hero"
// import ClientGallery from "./components/infinit scrolling test/ClientGallery"
import InitialGalleryLoad from "./components/infinit scrolling test/InitialGalleryLoad"
export default function Home() {
  return(
    <>
      <Hero />
      <Filters />
      <InitialGalleryLoad />
      {/* <ClientGallery /> */}
    {/* <Suspense fallback={<Loading />}>
      <Gallery />
    </Suspense> */}
    </>
  )
  
}
