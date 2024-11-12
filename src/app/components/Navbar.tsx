"use client"
import Link from "next/link";
import Search from "./Search";
import { useState } from "react";
import Close from "../assets/Close";

export default function Navbar() {
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const handleClick = () => {
    setToggleSearch(!toggleSearch);
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
    
  }
  return (
    <>
      <header className="bg-black border-b-[1px] border-white border-opacity-30 sticky top-0 z-10">
        <nav className="flex flex-row sm: justify-between items-center max-w-7xl mx-auto text-white p-4 font-bold ">
          <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
              <Link href='/'>Image Gallery</Link>
          </h1>
          {toggleSearch && 
          <span onClick={handleClick}><Close /></span>
          }
          { !toggleSearch &&
          <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block md:hidden  size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          
          }

        </nav>
      </header>  

      <div className={`pettern h-64 md:h-96 w-full relative ${toggleSearch? 'flex animate-ease-to-bottom ' : 'hidden'} md:flex justify-center `}>

          <Search />
      </div>
        
    </>
  )
}
