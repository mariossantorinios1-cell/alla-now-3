"use client";
import { FaBell, FaUserCircle, FaSearch, FaVideo } from "react-icons/fa";

export default function Navbar() {
  return (
    <div style={{
      height: "60px",
      background: "#000",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      borderBottom: "1px solid #222"
    }}>

      {/* LOGO */}
      <div style={{ fontSize: "22px", fontWeight: "bold", letterSpacing: "1px" }}>
        ALLNOW
      </div>

      {/* SEARCH BAR */}
      <div style={{
        display: "flex",
        alignItems: "center",
        background: "#111",
        padding: "8px 12px",
        borderRadius: "30px",
        border: "1px solid #333",
        width: "40%"
      }}>
        <FaSearch style={{ marginRight: "10px" }} />
        <input
          type="text"
          placeholder="Search..."
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
            width: "100%"
          }}
        />
      </div>

      {/* ICONS */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        fontSize: "20px"
      }}>
        <FaVideo style={{ cursor: "pointer" }} />
        <FaBell style={{ cursor: "pointer" }} />
        <FaUserCircle style={{ cursor: "pointer" }} />
      </div>

    </div>
  );
}
