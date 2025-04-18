import Navbar from "@/components/Navbar";

export default function Podcast() {
  return (
    <div className="min-h-screen bg-[url('/podcast-hero.jpg')] bg-cover bg-center relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#064273] mix-blend-multiply" />
      
      {/* Navigation - transparent */}
      <header className="relative z-10">
        <Navbar currentPage="podcast" />
      </header>
      
      {/* Podcast content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[85vh] px-6 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.02em] mb-10">
          <strong>Podcast</strong>
        </h1>
        <iframe
          src="https://embed.podcasts.apple.com/us/podcast/speedsail/id1623881938"
          height="450"
          style={{ width: '100%', maxWidth: '660px', borderRadius: '12px' }}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="mx-auto"
        ></iframe>
      </div>
      
      <footer className="relative z-10 text-center text-white py-6 text-sm">
        © Copyright SpeedSail™ 2021-2025. All rights reserved.
      </footer>
    </div>
  );
}
