"use client"
import Link from "next/link";
import Search from "./Search";
import Logo from "../assets/Logo";

export default function Navbar() {
  
  return (

    <div className="bg-black sticky top-0 w-full z-10 py-5 text-white border-b border-white/30">

      <nav className="max-w-7xl mx-auto px-2 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
            <Link href='/'><Logo /></Link>
        </h1>
        <Search />
      </nav>

    </div>
  )
 
}
