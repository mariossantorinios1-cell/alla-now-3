"use client";

export default function MainLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar */}
      <div className="w-20 bg-zinc-900 border-r border-zinc-700 flex flex-col items-center py-6">
        <p className="text-xl font-bold">A</p>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
}
