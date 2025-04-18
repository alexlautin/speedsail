"use client";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/Search";

type NavbarProps = {
  currentPage?: 'home' | 'videos' | 'podcast' | 'about' | 'contact';
};

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  return (
    <header className="relative z-10">
      <nav className="h-20 flex justify-between items-center px-6">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            width={30} 
            height={30} 
            alt="Speedsail logo" 
            className="mr-2"
            priority={true}
            style={{ width: 'auto', height: 'auto' }}
          />
          <span className="text-white text-lg font-light">Speedsail™</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" className={`text-white hover:text-gray-300 ${currentPage === 'home' ? 'font-bold' : 'font-light'}`}>Home</Link>
          <Link href="/videos" className={`text-white hover:text-gray-300 ${currentPage === 'videos' ? 'font-bold' : 'font-light'}`}>Videos</Link>
          <Link href="/podcast" className={`text-white hover:text-gray-300 ${currentPage === 'podcast' ? 'font-bold' : 'font-light'}`}>Podcast</Link>
          <Link href="/about" className={`text-white pr-2 hover:text-gray-300 ${currentPage === 'about' ? 'font-bold' : 'font-light'}`}>About</Link>
          <Search />
        </div>
      </nav>
    </header>
  );
}