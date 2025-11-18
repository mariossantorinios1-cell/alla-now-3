"use client";

import Link from "next/link";

export default function VideoCard({ video }) {
  return (
    <Link href={`/video/${video.id}`}>
      <div className="bg-[#111] rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all">
        
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-3">
          <h2 className="text-white font-semibold text-sm line-clamp-2">
            {video.title}
          </h2>

          <p className="text-gray-400 text-xs mt-1">
            {video.views} views • {video.uploaded}
          </p>
        </div>
      </div>
    </Link>
  );
}
