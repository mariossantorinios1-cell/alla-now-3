import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />

        <div style={{
          flex: 1,
          background: "#f5f5f5",
          padding: "20px",
          fontSize: "22px",
          fontWeight: "bold"
        }}>
          Καλώς ήρθες στο ALLNOW 🔥  
          <br />
          Το site σου λειτουργεί κανονικά!
        </div>
      </div>

    </div>
  );
}
