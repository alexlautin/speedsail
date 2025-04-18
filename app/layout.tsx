// app/layout.tsx
import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Speedsail™",
  description: "The fastest you've ever gone",
};

export const viewport = {
  themeColor: "#464D4D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="document" href="https://www.youtube.com/embed/jhox2wPf1lk" />
        <link rel="preload" as="document" href="https://embed.podcasts.apple.com/us/podcast/speedsail/id1623881938" />
      </head>
      <body className={`min-h-screen flex flex-col font-sans text-slate-800 overflow-y-auto ${lato.className}`}>
        {children}
      </body>
    </html>
  );
}