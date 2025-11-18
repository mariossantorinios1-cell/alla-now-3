'use client'

import { useEffect, useState } from "react";

export default function VideoPage({ params }) {
  const { id } = params;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // Local-only mock to avoid SSR issues
    const stored = localStorage.getItem("demo-video-" + id);
    if (stored) {
      setVideo(JSON.parse(stored));
    } else {
      setVideo({
        id,
        title: "Video " + id,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail: "https://placehold.co/600x400"
      });
    }
  }, [id]);

  if (!video) return <div className="p-4">Loading video...</div>;

  return (
    <div className="p-4">
      <video
        src={video.url}
        controls
        className="w-full rounded-xl"
        poster={video.thumbnail}
      />
      <h1 className="text-2xl font-bold mt-4">{video.title}</h1>
      <p className="text-gray-400">Video ID: {id}</p>
    </div>
  );
}
