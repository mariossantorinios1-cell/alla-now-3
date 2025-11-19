export default function Sidebar() {
  return (
    <div style={{
      width: "250px",
      height: "100vh",
      background: "#111",
      color: "#fff",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>AllNow</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <a href="/" style={{ color: "#fff", textDecoration: "none" }}>🏠 Home</a>
        <a href="/videos" style={{ color: "#fff", textDecoration: "none" }}>🎥 Videos</a>
        <a href="/live" style={{ color: "#fff", textDecoration: "none" }}>🔴 Live</a>
        <a href="/gaming" style={{ color: "#fff", textDecoration: "none" }}>🎮 Gaming</a>
        <a href="/messages" style={{ color: "#fff", textDecoration: "none" }}>💬 Messages</a>
        <a href="/profile" style={{ color: "#fff", textDecoration: "none" }}>👤 Profile</a>
      </nav>
    </div>
  );
}
