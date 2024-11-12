'use client'
import { useState } from "react"
import Share from "../assets/Share"
import ShareIcons from "./ShareIcons";
import type { Photo } from "@/models/Images";
import Close from "../assets/Close";

type ImageDetailProps = {
    image: Photo;
}
export default function ShareModal({image}: ImageDetailProps) {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
  return (
    <>
        <div id="share"
        onClick={handleClick}
        className="p-2 md:py-3 box-border md:px-4 border text-gray-600 hover:text-gray-800 text-xs md:text-base cursor-pointer border-current rounded-lg flex justify-center items-center gap-1"
        >
            <span><Share /></span>
            <span className="hidden md:inline-block">Share</span>

        </div>
        {clicked && (
            <div className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80 flex justify-center items-center">
                
                <div className="relative w-64 md:w-80 lg:w-96 h-[30vh] bg-white rounded-lg">
                    <div onClick={handleClick} className="absolute -top-4 -left-8 text-white cursor-pointer transition-transform hover:scale-110 active:scale-95"><Close /></div>
                    <p className="text-center font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl m-2 text-wrap">Share with your commuinty</p>
                    <ShareIcons image={image} />
                </div>

            </div>
                
        )}
    </>
  )
}
