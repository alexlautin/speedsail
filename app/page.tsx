import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const viewport = {
  themeColor: "#464D4D",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black/60 bg-cover bg-center relative">
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
      <div className="relative z-10 mx-auto max-w-14xl pt-96 min-h-screen flex flex-col items-start px-6 pl-42 text-white">
        <h1 className="text-5xl md:text-5xl font-light tracking-[0.02em]">
          The Fastest <strong>You</strong>&apos;ve Ever Gone
        </h1>
        <p className="mt-6 text-lg md:text-3xl tracking-[0.02em] font-light">
          A series of <Link href="/videos" className="underline hover:text-gray-300">videos</Link> dedicated to the art of sailing fast
        </p>
      </div>
    </div>
  );
}