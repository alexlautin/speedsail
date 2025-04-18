import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-[url('/sailing.png')] bg-cover bg-center relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      
      <Navbar currentPage="about" />
      
      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-14xl h-[92vh] px-6 flex flex-col items-start justify-center pl-42 text-white">
        <h1 className="text-5xl md:text-3xl font-light tracking-[0.02em]">
          <strong>Alex</strong>
        </h1>
        <p className="mt-6 text-lg md:text-lg tracking-[0.02em] font-light">
        I am a recent graduate of Horace Mann School in New York City. I discovered <br />
        my passion for sailing six years ago when I attended a day camp at the <br />
        Breakwater Community Sailing Center in Sag Harbor, NY. Since then, I have <br />
        raced dinghies and keelboats, and I serve as a sailing instructor, teaching <br />
        kids how to enjoy sailing as much as I do. <br /> <br />
        My goal for this site is to share the joy of sailing with as many people as possible.
        </p>
      </div>
    </div>
  );
}