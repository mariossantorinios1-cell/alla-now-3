"use client";

export default function NavigationBar() {
  return (
    <div
      style={{
        width: "100%",
        background: "#000",
        color: "#fff",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ fontSize: "20px" }}>AllNow</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </a>

        <a href="/explore" style={{ color: "#fff", textDecoration: "none" }}>
          Explore
        </a>

        <a href="/gaming" style={{ color: "#fff", textDecoration: "none" }}>
          Gaming
        </a>

        <a href="/upload" style={{ color: "#fff", textDecoration: "none" }}>
          Upload
        </a>
      </div>
    </div>
  );
}
