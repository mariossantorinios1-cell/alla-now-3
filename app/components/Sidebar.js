import { FaHome, FaUser, FaVideo } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div style={{
      width: "200px",
      background: "#222",
      color: "white",
      height: "100vh",
      padding: "20px"
    }}>
      <h2 style={{ marginBottom: "20px" }}>MENU</h2>
      <div><FaHome /> Home</div>
      <div><FaUser /> Profile</div>
      <div><FaVideo /> Videos</div>
    </div>
  );
}
