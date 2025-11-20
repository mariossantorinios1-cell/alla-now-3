"use client";

import { FaHome, FaSearch, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-black text-white flex items-center justify-between px-6">
      <div className="text-xl font-bold">AllNow</div>

      <div className="flex items-center gap-6 text-lg">
        <FaHome className="cursor-pointer hover:text-gray-300" />
        <FaSearch className="cursor-pointer hover:text-gray-300" />
        <FaUser className="cursor-pointer hover:text-gray-300" />
      </div>
    </nav>
  );
}
