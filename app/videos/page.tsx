import Head from "next/head";
import Navbar from "@/components/Navbar";
import LiteYouTubeEmbed from "@/components/LiteYouTubeEmbed";

export const viewport = {
  themeColor: "#020611",
};

export const dynamic = 'force-static';

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
    <>
      <Head>
        <link rel="preload" as="document" href="https://www.youtube.com/embed/jhox2wPf1lk?modestbranding=1&rel=0" />
        <link rel="preload" as="document" href="https://www.youtube.com/embed/NhDmy3xEPC8?modestbranding=1&rel=0" />
        <link rel="preload" as="document" href="https://www.youtube.com/embed/7OdsmL1xnMY?modestbranding=1&rel=0" />
        <link rel="preload" as="document" href="https://www.youtube.com/embed/-IcsKZRHk2c?modestbranding=1&rel=0" />
        <link rel="preload" as="document" href="https://www.youtube.com/embed/dK9oM-GS6QY?modestbranding=1&rel=0" />
        <link rel="preload" as="document" href="https://www.youtube.com/embed/jWbmofAxvuQ?modestbranding=1&rel=0" />
      </Head>
      <div className="min-h-screen bg-cover bg-center relative">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#064273] mix-blend-multiply" />
        
        <Navbar currentPage="videos" />
        
        {/* Page content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white">
          <h1 className="text-5xl font-light tracking-wide uppercase text-center mb-16">
            <strong className="font-normal">Videos</strong>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="aspect-video relative">
                  <LiteYouTubeEmbed id={video.id} title={video.title} />
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
    </>
  );
}