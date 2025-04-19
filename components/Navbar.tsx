"use client";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/Search";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type NavbarProps = {
  currentPage?: 'home' | 'videos' | 'podcast' | 'about' | 'contact';
};

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative z-10">
      <nav className="h-20 flex justify-between items-center px-4 sm:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
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
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link href="/" className={`text-white hover:text-gray-300 ${currentPage === 'home' ? 'font-bold' : 'font-light'}`}>Home</Link>
          <Link href="/videos" className={`text-white hover:text-gray-300 ${currentPage === 'videos' ? 'font-bold' : 'font-light'}`}>Videos</Link>
          <Link href="/podcast" className={`text-white hover:text-gray-300 ${currentPage === 'podcast' ? 'font-bold' : 'font-light'}`}>Podcast</Link>
          <Link href="/about" className={`text-white pr-2 hover:text-gray-300 ${currentPage === 'about' ? 'font-bold' : 'font-light'}`}>About</Link>
          <Search />
        </div>
        {/* Mobile nav */}
        {mounted && menuOpen && typeof window !== 'undefined' && document.body &&
          createPortal(
            <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center sm:hidden z-50">
              <button
                className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              <div className="flex flex-row items-center justify-center space-x-6 mb-6">
                {[ 
                  { href: '/', label: 'Home', key: 'home' },
                  { href: '/videos', label: 'Videos', key: 'videos' },
                  { href: '/podcast', label: 'Podcast', key: 'podcast' },
                  { href: '/about', label: 'About', key: 'about' },
                ].map(link => (
                  <div key={link.key} onClick={() => setMenuOpen(false)}>
                    <Link
                      href={link.href}
                      className={`text-white text-lg px-2 py-1 rounded hover:bg-white/10 transition ${currentPage === link.key ? 'font-bold underline' : 'font-light'}`}
                      prefetch={false}
                      scroll={true}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
              {/* <div className="w-full flex justify-center">
                <div className="max-w-xs w-full px-4">
                    <Search />
                </div>
              </div> */}
            </div>,
            document.body
          )
        }
      </nav>
    </header>
  );
}