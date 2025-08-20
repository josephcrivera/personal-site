import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joseph Rivera - Full Stack Developer",
  description: "A personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        </head>
        <body>
            {/* NAVBAR */}
            <nav className="z-10 fixed inset-x-0 top-0">
                <div className="flex flex-row p-5 justify-between bg-[#93eded]/50 backdrop-blur-md">
                    <div className="">
                        <Link href="/" className="text-2xl">&#8962;</Link>
                    </div>
                    <div className="flex flex-row gap-8">
                        <a href="#skills">Skills</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
            
            {/* main content */}
            <main className="pt-24 z-15">
                {children}
            </main>
        </body>
    </html>
  );
}
