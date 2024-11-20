'use client'
import { useRouter } from "next/navigation";
import Close from "../../assets/icons/Close";

export default function ModalCloser() {
    const router = useRouter();
    const closeModal = () => {
        router.back();
        document.body.style.overflow = "";
    }
  return (
    <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 active:text-gray-800 
     lg:-right-10 lg:text-white lg:active:text-white p-2 cursor-pointer transition-transform hover:scale-110 active:scale-95 ">
      <Close />
    </button>
    

  )
}
