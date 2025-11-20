"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-black text-white flex items-center justify-between px-6 shadow-lg">
      
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        AllNow
      </Link>

      {/* Search */}
      <div className="flex items-center bg-zinc-800 px-3 py-1 rounded-full w-72">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Profile / Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/upload" className="hover:text-gray-300">
          ⬆️ Upload
        </Link>

        <Link href="/messages" className="hover:text-gray-300">
          💬 Messages
        </Link>

        <Link href="/notifications" className="hover:text-gray-300">
          🔔 Notifications
        </Link>

        <Link href="/profile" className="hover:text-gray-300">
          👤 Profile
        </Link>
      </div>
    </nav>
  );
}
