'use client'

import { useEffect, useState } from "react";

export default function Profile({ params }) {
  const { id } = params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Placeholder fetch — no server rendering
    const stored = localStorage.getItem("demo-profile-" + id);
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      setUser({
        id,
        name: "User " + id,
        avatar: "https://placehold.co/200"
      });
    }
  }, [id]);

  if (!user) return <div className="p-4">Loading profile...</div>;

  return (
    <div className="p-4">
      <img src={user.avatar} className="w-32 h-32 rounded-full" />
      <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
      <p className="text-gray-400">User ID: {id}</p>
    </div>
  );
}
