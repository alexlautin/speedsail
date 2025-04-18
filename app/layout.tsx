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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col font-sans text-slate-800 ${lato.className}`}>
        {children}
      </body>
    </html>
  );
}