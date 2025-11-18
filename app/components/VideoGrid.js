"use client";

import VideoCard from "./VideoCard";

export default function VideoGrid({ videos }) {
  if (!videos || videos.length === 0)
    return <p className="text-white opacity-70 p-4">No videos found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
