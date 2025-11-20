export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "#111",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        borderBottom: "1px solid #222",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>AllNow</div>

      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
        <a href="/videos" style={{ color: "#fff", textDecoration: "none" }}>Videos</a>
        <a href="/live" style={{ color: "#fff", textDecoration: "none" }}>Live</a>
        <a href="/gaming" style={{ color: "#fff", textDecoration: "none" }}>Gaming</a>
      </nav>
    </header>
  );
}
