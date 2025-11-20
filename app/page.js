import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex h-screen bg-black text-white">
      
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to AllNow</h1>
          <p className="text-lg text-gray-300">
            Το site λειτουργεί — είμαστε έτοιμοι να αρχίσουμε να χτίζουμε τις κύριες λειτουργίες (video, live, feed, posts, gaming κλπ).
          </p>
        </div>

      </div>

    </div>
  );
}
