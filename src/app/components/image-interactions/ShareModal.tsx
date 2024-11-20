'use client'
import Share from "@/app/assets/icons/Share";
import { MouseEventHandler, useCallback, useRef, useState } from "react"
import ShareIcons from "./ShareIcons";
import Close from "@/app/assets/icons/Close";


export default function ShareModal() {
    const [clicked, setClicked] = useState(false);
    const modal = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
    }

    const Dismiss: MouseEventHandler = useCallback(
        (e) => {
            if(e.target === modal.current) setClicked(!clicked);
        }
    ,[setClicked]
    ); 

  return (
    <>
        <div id="share"
        onClick={handleClick}
        className="p-2 md:py-3 box-border md:px-4 border text-gray-600 hover:text-gray-800 text-xs md:text-base cursor-pointer border-current rounded-lg flex justify-center items-center gap-1"
        >
            <span><Share width={14} height={14}/></span>
            <span className="hidden md:inline-block">Share</span>

        </div>
        {clicked && (
            <div
            ref={modal}
            onClick={Dismiss}
            className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80 flex justify-center items-center"
            >
                <div className="relative w-full sm:w-[30rem] h-1/2 md:h-96 mt-auto sm:m-0 bg-white rounded-t-xl sm:rounded-xl animate-move-up flex flex-col">
                    <header className="flex justify-between items-center mx-4 py-8  border-b text-gray-800">
                        <div className="flex gap-2 items-end">
                            <div className="bg-gray-100 text-gray-500 p-1 rounded-md">
                                <Share width={13} height={13} />
                            </div>
                            <p className="font-bold md:text-lg text-wrap">Share with your commuinty</p>
                        </div>
                        <div onClick={handleClick} className="cursor-pointer transition-transform hover:scale-110 active:scale-95"><Close /></div>
                    </header>
                    <ShareIcons/>
                </div>

            </div>
                
        )}
    </>
  )
}
