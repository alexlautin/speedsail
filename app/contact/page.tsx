import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black/60 bg-cover bg-center relative">
      {/* Optimized background image */}
      <Image 
        src="/contact.jpeg"
        alt="Contact background"
        fill
        priority={false}
        quality={70}
        style={{ objectFit: 'cover', zIndex: 0 }}
        className="absolute inset-0 -z-10"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-0" />
      
      <Navbar currentPage="contact" />
      
      {/* Contact card content */}
      <div className="relative z-10 flex items-center justify-center h-[80vh]">
        <div className="bg-black/70 rounded-lg p-8 max-w-md w-full backdrop-blur-sm">
          <h1 className="text-4xl font-light tracking-[0.02em] text-white mb-6 text-center">
            <strong>Contact</strong>
          </h1>
          
          <div className="mb-6">
            <h2 className="text-2xl font-light text-white mb-2">
              <strong>Alex</strong>
            </h2>
            <div className="flex items-center text-white mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:alex@speedsail.org" className="text-lg font-light hover:underline">
                alex@speedsail.org
              </a>
            </div>
            <div className="flex items-center text-white mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.066 7-2.229 7 1.977v7.258z" />
              </svg>
              <a href="https://www.linkedin.com/company/speedsail" className="text-lg font-light hover:underline">
                linkedin.com/company.speedsail
              </a>
            </div>
          </div>
          
          <div className="text-white text-center mt-8">
          </div>
        </div>
      </div>
      
      <footer className="relative z-10 text-center text-white py-10 text-sm">
        © Copyright SpeedSail™ 2021-2025. All rights reserved.
      </footer>
    </div>
  );
}

// Note: For best performance, compress /public/contact.jpeg using an image optimizer tool.