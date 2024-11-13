'use client'
// import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'

const categories:string[]  = ['art', 'beauty', 'sports','fashion', 'models'];
export default function Filters() {
//const [clicked, setClicked] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (category:string) => {
    router.push(`/results/${category}`)
    //setClicked(category)
  }
  return(
    <>
      <div className="flex justify-center gap-3 sm:gap-10 md:gap-14 max-w-7xl mx-auto">
        {categories.map((category, i) => (
        
          <button key={i} onClick={() => handleClick(category)}
          className={`categories ${pathname === `/results/${category}`?'dark-btn': 'text-gray-700'}`}>
            {category}
          </button>
        
          ))}
      </div>
      
    </>
    
  )
 
}
