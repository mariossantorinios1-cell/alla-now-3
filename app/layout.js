import "./globals.css";

export const metadata = {
  title: "AllNow",
  description: "All content. All people. All now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* HEADER */}
        <header className="w-full h-16 bg-[#111] border-b border-[#222] flex items-center justify-between px-4 fixed top-0 left-0 z-50">
          <div className="text-2xl font-bold">AllNow</div>

          <nav className="flex gap-6 text-sm">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/explore" className="hover:text-gray-300">Explore</a>
            <a href="/gaming" className="hover:text-gray-300">Gaming</a>
            <a href="/upload" className="hover:text-gray-300">Upload</a>
            <a href="/auth/login" className="hover:text-gray-300">Login</a>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-20 px-4 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
