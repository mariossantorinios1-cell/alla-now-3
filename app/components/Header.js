"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-black/80 backdrop-blur-md border-b border-white/10 flex items-center px-4 z-50">
      <nav className="flex w-full justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          AllNow
        </Link>

        <div className="flex gap-4 text-white">
          <Link href="/explore">Explore</Link>
          <Link href="/gaming">Gaming</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/auth">Login</Link>
        </div>
      </nav>
    </header>
  );
}
