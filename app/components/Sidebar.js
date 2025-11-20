"use client";

import React from "react";
import { 
  Home, Flame, PlayCircle, Gamepad2, Cpu, 
  Tv, Compass, Bookmark, Settings
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <Flame size={20} />, label: "Trending" },
    { icon: <PlayCircle size={20} />, label: "Videos" },
    { icon: <Tv size={20} />, label: "Live" },
    { icon: <Compass size={20} />, label: "Explore" },
    { icon: <Bookmark size={20} />, label: "Saved" },
  ];

  const gaming = [
    { icon: <Gamepad2 size={20} />, label: "Games" },
    { icon: <Tv size={20} />, label: "Game Streams" },
  ];

  const ai = [
    { icon: <Cpu size={20} />, label: "AI Tools" },
    { icon: <Cpu size={20} />, label: "ChatGPT" },
  ];

  return (
    <aside 
      style={{
        width: 240,
        height: "100vh",
        background: "#0d0d0d",
        borderRight: "1px solid #222",
        padding: "20px 10px",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto"
      }}
    >

      {/* MAIN MENU */}
      <Section title="Menu" items={menu} />

      {/* GAMING */}
      <Section title="Gaming" items={gaming} />

      {/* AI FEATURES */}
      <Section title="AI" items={ai} />

      {/* SETTINGS */}
      <div style={{ marginTop: 30 }}>
        <Item icon={<Settings size={20} />} label="Settings" />
      </div>
    </aside>
  );
}

function Section({ title, items }) {
  return (
    <div style={{ marginBottom: 30 }}>
      <p style={{ color: "#666", fontSize: 12, marginLeft: 10, marginBottom: 8 }}>
        {title}
      </p>
      {items.map((x, i) => (
        <Item key={i} icon={x.icon} label={x.label} />
      ))}
    </div>
  );
}

function Item({ icon, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: 8,
        cursor: "pointer",
        color: "#ddd"
      }}
      onMouseEnter={e => e.currentTarget.style.background = "#1a1a1a"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
