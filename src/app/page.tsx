import { Suspense } from "react"
import Gallery from "./components/Gallery"
import Loading from "./Loading"
export default function Home() {
  return(
    <>
      <Suspense fallback={<Loading />}><Gallery /></Suspense>
    </>
  )
  
}
