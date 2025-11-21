import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AllNow",
  description: "The new generation all-in-one platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">

        {/* Header */}
        <header className="w-full bg-[#111] border-b border-gray-800 p-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            AllNow
          </Link>

          <nav className="flex gap-6 text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/videos" className="hover:text-white">Videos</Link>
            <Link href="/images" className="hover:text-white">Images</Link>
            <Link href="/live" className="hover:text-white">Live</Link>
            <Link href="/gaming" className="hover:text-white">Gaming</Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 w-full max-w-6xl mx-auto p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-[#111] border-t border-gray-800 p-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} AllNow — All Rights Reserved
        </footer>

      </body>
    </html>
  );
}
