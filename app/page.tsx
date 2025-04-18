import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/frontpage.jpg')] bg-cover bg-center relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      
      <Navbar currentPage="home" />
      
      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-14xl h-[92vh] px-6 flex flex-col items-start justify-center pl-42 text-white">
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