import { Suspense } from "react"
import Gallery from "./components/Gallery"
import Loading from "./Loading"
import Filters from "./components/Filters"
export default function Home() {
  return(
    <>
    <Filters />
    <Suspense fallback={<Loading />}>
      <Gallery />
    </Suspense>
    </>
  )
  
}
