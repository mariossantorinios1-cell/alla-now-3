"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-zinc-900 text-white flex flex-col p-6 gap-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>

      <Link href="/" className="hover:text-gray-300">
        🏠 Home
      </Link>

      <Link href="/videos" className="hover:text-gray-300">
        📺 Videos
      </Link>

      <Link href="/live" className="hover:text-gray-300">
        🔴 Live Streams
      </Link>

      <Link href="/gaming" className="hover:text-gray-300">
        🎮 Gaming
      </Link>

      <Link href="/news" className="hover:text-gray-300">
        📰 News
      </Link>

      <Link href="/profile" className="hover:text-gray-300">
        👤 Profile
      </Link>
    </aside>
  );
}
