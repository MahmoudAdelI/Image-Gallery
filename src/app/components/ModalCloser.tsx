'use client'
import { useRouter } from "next/navigation";
import Close from "../assets/Close";

export default function ModalCloser() {
    const router = useRouter();
    const closeModal = () => {
        router.back();
    }
  return (
    <div onClick={closeModal} className="absolute top-2 left-1/2 -translate-x-1/2  text-gray-400 active:text-gray-600 
    lg:-top-4 lg:-left-8 lg:text-white shadow-lg active:shadow-md active:translate-y-[2px] rounded-full p-2 cursor-pointer 
    transition-all duration-100 ease-linear"><Close /></div>

  )
}
