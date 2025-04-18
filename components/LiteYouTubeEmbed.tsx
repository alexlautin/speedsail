"use client";
import React, { useState } from "react";
import Image from "next/image";

interface LiteYouTubeEmbedProps {
  id: string;
  title: string;
}

const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps> = ({ id, title }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video w-full cursor-pointer bg-black rounded overflow-hidden" onClick={() => setIframeLoaded(true)}>
      {!iframeLoaded && (
        <>
          <Image
            src={thumbnail}
            alt={`YouTube thumbnail for ${title}`}
            fill
            className="absolute object-cover top-0 left-0"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="68" height="48" viewBox="0 0 68 48">
              <path d="M66.52 7.85a8.27 8.27 0 0 0-5.82-5.83C56.36 0 34 0 34 0S11.64 0 7.3 2.02A8.27 8.27 0 0 0 1.48 7.85 85.4 85.4 0 0 0 0 24a85.4 85.4 0 0 0 1.48 16.15 8.27 8.27 0 0 0 5.82 5.83C11.64 48 34 48 34 48s22.36 0 26.7-2.02a8.27 8.27 0 0 0 5.82-5.83A85.4 85.4 0 0 0 68 24a85.4 85.4 0 0 0-1.48-16.15z" fill="#212121" fillOpacity="0.8"/>
              <path d="M45 24 27 14v20z" fill="#fff"/>
            </svg>
          </div>
        </>
      )}
      {iframeLoaded && (
        <iframe
          className="absolute w-full h-full top-0 left-0"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default LiteYouTubeEmbed;
