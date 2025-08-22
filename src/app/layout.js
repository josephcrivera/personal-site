import { Geist, Geist_Mono, Faculty_Glyphic } from "next/font/google";
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

const faculty = Faculty_Glyphic({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: "Joseph Rivera - Student Developer",
  description: "A personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </head>
        <body>
            {/* NAVBAR */}
            <nav className="z-50 fixed inset-x-0 top-0 h-12">
                <div className="h-full flex flex-row p-5 justify-between bg-white/50 backdrop-blur-md items-center">
                    <div className="">
                        <Link href="/" className="text-2xl navbar">&#8962;</Link>
                    </div>
                    <div className="flex flex-row gap-8">
                        <a href="#about" className="navbar textlg">About</a>
                        <a href="#skills" className="navbar textlg">Skills</a>
                        <a href="#experience" className="navbar textlg">Experience</a>
                        <a href="#projects" className="navbar textlg">Projects</a>
                        <a href="#contact" className="navbar textlg">Contact</a>
                    </div>
                </div>
            </nav>
            
            {/* main content */}
            <main className="z-15">
                {children}
            </main>
        </body>
    </html>
  );
}
