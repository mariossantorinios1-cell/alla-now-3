import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6 text-white">
          <h1 className="text-4xl font-bold">AllNow is Live</h1>
          <p className="mt-4 text-lg text-neutral-300">
            Welcome to your new platform.
          </p>
        </main>
      </div>
    </div>
  );
}
