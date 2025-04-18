import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  currentPage?: 'home' | 'videos' | 'podcast' | 'about' | 'contact';
};

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  return (
    <header className="relative z-10">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            width={30} 
            height={30} 
            alt="Speedsail logo" 
            className="mr-2"
          />
          <span className="text-white text-lg font-light">Speedsail™</span>
        </div>
        
        <div className="flex space-x-6">
          <Link href="/" className={`text-white hover:text-gray-300 ${currentPage === 'home' ? 'font-bold' : 'font-light'}`}>Home</Link>
          <Link href="/videos" className={`text-white hover:text-gray-300 ${currentPage === 'videos' ? 'font-bold' : 'font-light'}`}>Videos</Link>
          <Link href="/podcast" className={`text-white hover:text-gray-300 ${currentPage === 'podcast' ? 'font-bold' : 'font-light'}`}>Podcast</Link>
          <Link href="/about" className={`text-white hover:text-gray-300 ${currentPage === 'about' ? 'font-bold' : 'font-light'}`}>About</Link>
          <Link href="/contact" className={`text-white hover:text-gray-300 ${currentPage === 'contact' ? 'font-bold' : 'font-light'}`}>Contact</Link>
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}