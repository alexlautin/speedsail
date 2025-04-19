import Navbar from "@/components/Navbar";
import Image from "next/image";

export const viewport = {
  themeColor: "#413E46",
};

export const dynamic = 'force-static';

export default function About() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-black/60 bg-cover bg-center relative">
        {/* Optimized background image */}
        <Image 
          src="/sailing.png"
          alt="Sailing background"
          fill
          priority={true}
          quality={70}
          style={{ objectFit: 'cover', zIndex: 0 }}
          className="absolute inset-0 -z-10"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-0" />
        
        <Navbar currentPage="about" />
        
        {/* Hero content */}
        <div className="relative z-10 mx-auto pl-6 md:pl-40 pb-10 md:pb-20 max-w-14xl h-full px-2 md:px-6 flex flex-col items-start justify-center text-white">
          <h1 className="text-3xl md:text-3xl font-light tracking-[0.02em]">
            <strong>Alex</strong>
          </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg tracking-[0.02em] font-light">
            I am a recent graduate of Horace Mann School in New York City. I discovered <br className="hidden md:block" />
            my passion for sailing six years ago when I attended a day camp at the <br className="hidden md:block" />
            Breakwater Community Sailing Center in Sag Harbor, NY. Since then, I have <br className="hidden md:block" />
            raced dinghies and keelboats, and I serve as a sailing instructor, teaching <br className="hidden md:block" />
            kids how to enjoy sailing as much as I do. <br className="hidden md:block" /> <br className="hidden md:block" />
            My goal for this site is to share the joy of sailing with as many people as possible.
            </p>
        </div>
      </div>
    </>
  );
}

// Note: For best performance, compress /public/sailing.png using an image optimizer tool.