"use client";

import Link from "next/link";

export default function VideoCard({ video }) {
  if (!video) return null;

  return (
    <Link
      href={`/video/${video.id}`}
      className="block bg-black/40 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-200"
    >
      <div className="w-full aspect-video bg-black">
        <img
          src={video.thumbnail || "/no-thumbnail.png"}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 text-white">
        <h3 className="text-lg font-semibold truncate">{video.title}</h3>
        <p className="text-sm opacity-60 truncate">{video.channel || "Unknown"}</p>
      </div>
    </Link>
  );
}
