"use client";

import Link from "next/link";
import { Home, Search, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-neutral-900 text-white p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">AllNow</h1>

      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-3 text-lg hover:text-blue-400">
          <Home size={22} /> Home
        </Link>

        <Link href="/search" className="flex items-center gap-3 text-lg hover:text-blue-400">
          <Search size={22} /> Search
        </Link>

        <Link href="/profile" className="flex items-center gap-3 text-lg hover:text-blue-400">
          <User size={22} /> Profile
        </Link>
      </nav>
    </div>
  );
}
