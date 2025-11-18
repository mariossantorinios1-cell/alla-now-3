'use client'

import { useEffect, useState } from "react";

export default function ProfilePage({ params }) {
  const { id } = params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ασφαλές localStorage – τρέχει μόνο client
    const saved = localStorage.getItem("demo-user-" + id);

    if (saved) {
      setUser(JSON.parse(saved));
    } else {
      // Mock user για να μην υπάρχει ποτέ error στο build
      setUser({
        id,
        name: "User " + id,
        avatar: "https://placehold.co/200x200",
        bio: "This is a demo bio for user " + id,
      });
    }
  }, [id]);

  if (!user) return <div className="p-4">Loading profile…</div>;

  return (
    <div className="p-4">
      <img
        src={user.avatar}
        alt="avatar"
        className="w-32 h-32 rounded-full border mb-4"
      />
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-400 mt-2">{user.bio}</p>
      <p className="text-gray-500 mt-4">Profile ID: {id}</p>
    </div>
  );
}
