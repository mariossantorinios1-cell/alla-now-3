"use client";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#111",
        color: "#fff",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>AllNow</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "12px" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <a href="/explore" style={{ color: "#fff", textDecoration: "none" }}>
            Explore
          </a>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <a href="/gaming" style={{ color: "#fff", textDecoration: "none" }}>
            Gaming
          </a>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <a href="/upload" style={{ color: "#fff", textDecoration: "none" }}>
            Upload
          </a>
        </li>
      </ul>
    </div>
  );
}
