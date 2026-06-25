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

        {/* Footer Ultra-Minimale a Riga Singola */}
        <footer className="border-t border-gray-200 bg-gray-50 py-5">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <p className="text-gray-600 text-sm text-center md:text-left">
              Organized by the{" "}
              <a href="https://my.vanderbilt.edu/cca/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-2">
                Center for Constructive Approximation
              </a>{" "}
              and the{" "}
              <a href="https://dieco.uninsubria.it/it/strutture/inside-lab" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 underline decoration-blue-200 underline-offset-2">
                InsIDE lab
              </a>.
            </p>
            
            <div className="flex items-center gap-5 opacity-80 hover:opacity-100 transition-opacity duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/vanderbilt.png" alt="Vanderbilt Logo" className="h-8 w-auto object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/inside-logo.png" alt="InsIDE Logo" className="h-8 w-auto object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/dde-logo.png" alt="DDE Logo" className="h-8 w-auto object-contain" />
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}