"use client";

import Link from "next/link";
import {
  Home,
  Search,
  Video,
  User,
  Gamepad2,
  Upload,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-black text-white p-6 flex flex-col gap-6">
      <Link href="/" className="flex items-center gap-3 text-lg">
        <Home size={22} />
        Home
      </Link>

      <Link href="/explore" className="flex items-center gap-3 text-lg">
        <Search size={22} />
        Explore
      </Link>

      <Link href="/video/upload" className="flex items-center gap-3 text-lg">
        <Upload size={22} />
        Upload Video
      </Link>

      <Link href="/gaming" className="flex items-center gap-3 text-lg">
        <Gamepad2 size={22} />
        Gaming
      </Link>

      <Link href="/profile/1" className="flex items-center gap-3 text-lg">
        <User size={22} />
        Profile
      </Link>
    </div>
  );
}
