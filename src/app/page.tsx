// import { Suspense } from "react"
// import Gallery from "./components/Gallery"
// import Loading from "./loading"
import Filters from "./components/Filters"
import Hero from "./components/Hero"
import ClientGallery from "./components/infinit scrolling test/ClientGallery"
export default function Home() {
  return(
    <>
      <Hero />
      <Filters />
      <ClientGallery />
    {/* <Suspense fallback={<Loading />}>
      <Gallery />
    </Suspense> */}
    </>
  )
  
}
