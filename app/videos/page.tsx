import Link from "next/link";
import Image from "next/image";

export default function Videos() {
  // Videos data structure - replace with actual videos
  const videos = [
    {
      id: "jhox2wPf1lk",
      title: "Episode 6",
      description: "An interview with Rohan Rooney."
    },
    {
        id: "NhDmy3xEPC8",
        title: "Episode 5",
        description: "An interview with Dona Bergin."
    },
    {
        id: "7OdsmL1xnMY",
        title: "Episode 4",
        description: "An interview with Joshua Hyman."
    },
    {
          id: "-IcsKZRHk2c",
          title: "Episode 3",
          description: "An interview with Venos Spyrou."
    },
    {
        id: "dK9oM-GS6QY",
        title: "Episode 2",
        description: "An interview with Gonzalo Valverde Vargas."
    },
    {
        id: "jWbmofAxvuQ",
        title: "Episode 1",
        description: "An interview with Tripp Burd."
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/videos-bg.jpg')] bg-cover bg-center relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#064273] mix-blend-multiply" />
      
      {/* Navigation - transparent */}
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
            <Link href="/" className="text-white hover:text-gray-300 font-light">Home</Link>
            <Link href="/videos" className="text-white hover:text-gray-300 font-bold">Videos</Link>
            <Link href="/podcast" className="text-white hover:text-gray-300 font-light">Podcast</Link>
            <Link href="/about" className="text-white hover:text-gray-300 font-light">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-300 font-light">Contact</Link>
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      
      {/* Page content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white">
        <h1 className="text-5xl font-light tracking-wide uppercase text-center mb-16">
          <strong className="font-normal">Videos</strong>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="aspect-video relative">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                <p className="text-gray-300 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    <footer className="relative z-10 text-center text-white py-10 text-sm">
      © Copyright SpeedSail™ 2021-2025. All rights reserved.
    </footer>
    </div>
  );
}