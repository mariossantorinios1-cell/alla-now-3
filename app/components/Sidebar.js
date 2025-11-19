"use client";

import { Home, Users, Gamepad2, Video } from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { name: "Home", icon: <Home />, href: "/" },
    { name: "Explore", icon: <Users />, href: "/explore" },
    { name: "Gaming", icon: <Gamepad2 />, href: "/gaming" },
    { name: "Videos", icon: <Video />, href: "/video" }
  ];

  return (
    <div style={{ width: "230px", padding: "20px" }}>
      {menu.map((item) => (
        <a
          key={item.name}
          href={item.href}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 0",
            fontSize: "18px"
          }}
        >
          {item.icon}
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
