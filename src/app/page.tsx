import { Suspense } from "react"
import Gallery from "./components/Gallery"
import Loading from "./Loading"
import Filters from "./components/Filters"
import Hero from "./components/Hero"
export default function Home() {
  return(
    <>
    <Hero />
    <Filters />
    <Suspense fallback={<Loading />}>
      <Gallery />
    </Suspense>
    </>
  )
  
}
