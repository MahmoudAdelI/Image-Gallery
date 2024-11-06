"use client"

import {useState, FormEvent} from 'react'
import { useRouter } from 'next/navigation'
export default function Search() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(search) router.push(`/results/${search}`);
        setSearch('');
    }

  return (

  <form onSubmit={handleSubmit}
  className='absolute bottom-6 w-[300px] md:w-[750px] bg-white rounded-xl p-2 flex justify-end'
  >

        <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='search'
            className=' w-[90%] box-border flex-1 outline-none text-black'
            />
        <button className='text-gray-500 active:text-black inline-block border-l border-current pl-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block  size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>

    </form>
  )
}
