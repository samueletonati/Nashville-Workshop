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
    // Added 'scroll-smooth' for elegant navigation
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation Menu */}
        <nav className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-md">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a href="#home" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1 -ml-1">Home</a>
            <a href="#description" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Description</a>
            <a href="#participants" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Participants</a>
            <a href="#venue" className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Venue & Links</a>
          </div>
        </nav>

        {/* Main Content Container */}
        <main className="max-w-5xl mx-auto px-6 py-12 bg-white min-h-screen shadow-sm">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Università degli Studi dell&apos;Insubria &amp; Vanderbilt University</p>
        </footer>
      </body>
    </html>
  );
}