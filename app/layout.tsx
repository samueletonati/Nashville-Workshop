import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanderbilt Workshop | Energy & Polarization Problems",
  description: "Energy and Polarization Problems in Mathematics and Statistics, part I. August 16-19, 2026 at Vanderbilt University.",
  keywords: ["Mathematics", "Statistics", "Energy", "Polarization", "Vanderbilt University", "Workshop", "Academic Conference"],
  authors: [{ name: "Università degli Studi dell'Insubria" }, { name: "Vanderbilt University" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation Menu */}
        <nav className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-md">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a href="#home" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1 -ml-1">Home</a>
            <a href="#description" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Description</a>
            <a href="#program" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Program</a>
            <a href="#participants" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Participants</a>
            <a href="#venue" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Venue & Links</a>
          </div>
        </nav>

        {/* Main Content Container */}
        <main className="max-w-5xl mx-auto px-6 py-12 bg-white min-h-screen shadow-sm">
          {children}
        </main>

        {/* Footer Con Organizzatori e Loghi */}
        <footer className="border-t border-gray-200 bg-gray-50 pt-12 pb-8 mt-8">
          <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">
            
            {/* Sezione Organizzatori */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left bg-white p-6 rounded-xl border border-gray-200 shadow-sm w-full">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base flex-1">
                Proudly organized by the{" "}
                <a href="https://my.vanderbilt.edu/cca/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-2">
                  Center for Constructive Approximation
                </a>{" "}
                (Vanderbilt University) and the{" "}
                <a href="https://dieco.uninsubria.it/it/strutture/inside-lab" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-2">
                  InsIDE lab
                </a>.
              </p>
              
              <div className="flex items-center gap-4 shrink-0">
                {/* InsIDE Logo Container */}
                <div className="h-14 w-28 bg-white border border-gray-100 rounded-md p-1.5 flex items-center justify-center shadow-sm relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/inside-logo.png" 
                    alt="InsIDE Lab Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
                
                {/* DDE Logo Container */}
                <div className="h-14 w-28 bg-white border border-gray-100 rounded-md p-1.5 flex items-center justify-center shadow-sm relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/dde-logo.png" 
                    alt="DDE Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500 w-full text-center">
              <p>© {new Date().getFullYear()} Università degli Studi dell&apos;Insubria &amp; Vanderbilt University</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}