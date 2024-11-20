"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children}: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
    document.body.style.overflow = "";
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (

    <div
      ref={overlay}
      className="fixed z-40 inset-0 mx-auto bg-black/90 "
      onClick={onClick}
    >
      
      <div
        className="absolute md:left-1/2 md:-translate-x-1/2 top-2 w-full h-full lg:w-[80vw] bg-white animate-move-up md:animate-none overflow-scroll"
      >
        {children}
      </div>
    </div>
  );
}