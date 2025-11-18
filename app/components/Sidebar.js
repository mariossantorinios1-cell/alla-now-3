"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Gamepad2, User } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", icon: <Home size={20} />, href: "/" },
    { name: "Explore", icon: <Compass size={20} />, href: "/explore" },
    { name: "Gaming", icon: <Gamepad2 size={20} />, href: "/gaming" },
    { name: "Profile", icon: <User size={20} />, href: "/profile/me" },
  ];

  return (
    <aside className="w-20 sm:w-64 bg-black text-white h-screen flex flex-col p-3 border-r border-gray-800 fixed">
      <h1 className="text-2xl font-bold mb-6 sm:block hidden">ALLNOW</h1>

      <nav className="flex flex-col gap-3">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition 
              ${pathname === item.href ? "bg-gray-800" : ""}`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
