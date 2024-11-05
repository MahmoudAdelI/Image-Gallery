import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <header className="bg-black border-b-[1px] border-white border-opacity-30 sticky top-0 z-10">
        <nav className="flex flex-col sm:flex-row sm: justify-start items-center max-w-7xl mx-auto text-white p-4 font-bold ">
          <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
              <Link href='/'>Image Gallery</Link>
          </h1>
        </nav>
      </header>  

      <div className="pettern h-96 w-full relative flex justify-center">

          <Search />
      </div>
        
    </>
  )
}
