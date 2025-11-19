"use client";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Feed */}
        <div className="p-6 space-y-6 overflow-y-auto">
          <h1 className="text-3xl font-bold">🔥 Trending Now</h1>

          {/* Example Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-zinc-900 p-4 rounded-xl shadow-xl">
              <img
                src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
                className="rounded-lg mb-3"
              />
              <h2 className="font-bold">Gaming Highlights</h2>
              <p className="text-sm text-zinc-400">Top gameplay moments</p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 p-4 rounded-xl shadow-xl">
              <img
                src="https://i.ytimg.com/vi/2Vv-BfVoq4g/maxresdefault.jpg"
                className="rounded-lg mb-3"
              />
              <h2 className="font-bold">Music Trends</h2>
              <p className="text-sm text-zinc-400">Most watched today</p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 p-4 rounded-xl shadow-xl">
              <img
                src="https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                className="rounded-lg mb-3"
              />
              <h2 className="font-bold">AI Clips</h2>
              <p className="text-sm text-zinc-400">Amazing AI-generated videos</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
