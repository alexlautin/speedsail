export const dynamic = 'force-static';

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const viewport = {
  themeColor: "#464D4D",
};

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-black/60 bg-cover bg-center relative">
      {/* Optimized background image */}
      <Image 
        src="/frontpage.jpg"
        alt="Sailing background"
        fill
        priority={true}
        quality={70}
        style={{ objectFit: 'cover', zIndex: 0 }}
        className="absolute inset-0 -z-10"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-0" />
      
      <Navbar currentPage="home" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-14xl flex flex-col items-start pl-6 md:pl-42 pb-10 px-4 md:px-6 text-white h-full justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.02em]">
          The Fastest <strong>You</strong>&apos;ve Ever Gone
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-3xl tracking-[0.02em] font-light">
          A series of <Link href="/videos" className="underline hover:text-gray-300">videos</Link> dedicated to the art of sailing fast
        </p>
      </div>
    </div>
  );
}