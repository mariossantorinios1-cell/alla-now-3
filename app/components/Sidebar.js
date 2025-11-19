"use client";
import { FaHome, FaFire, FaStar, FaFilm, FaUserFriends, FaGamepad } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#000",
      color: "#fff",
      height: "100vh",
      position: "fixed",
      top: "60px",
      left: 0,
      paddingTop: "20px",
      borderRight: "1px solid #222",
      display: "flex",
      flexDirection: "column",
      zIndex: 90
    }}>
      
      {/** MENU ITEM COMPONENT */}
      {[
        { icon: <FaHome />, label: "Home" },
        { icon: <FaFire />, label: "Trending" },
        { icon: <FaStar />, label: "Top Rated" },
        { icon: <FaFilm />, label: "Videos" },
        { icon: <FaUserFriends />, label: "Community" },
        { icon: <FaGamepad />, label: "Gaming" },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "14px 20px",
            cursor: "pointer",
            transition: "0.2s ease",
            fontSize: "16px"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#111";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <div style={{ fontSize: "20px" }}>{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}

    </div>
  );
}
