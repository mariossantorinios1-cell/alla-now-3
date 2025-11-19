import { FaHome, FaFire, FaUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-zinc-900 border-r border-zinc-800 p-6 space-y-6">
      <div className="text-2xl font-bold">Menu</div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3 cursor-pointer">
          <FaHome /> <span className="text-lg">Home</span>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer">
          <FaFire /> <span className="text-lg">Trending</span>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer">
          <FaUser /> <span className="text-lg">Profile</span>
        </div>
      </div>
    </div>
  );
}
