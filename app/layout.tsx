export const metadata = {
  title: "AllNow",
  description: "The best social + video + live platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        background: "#111", 
        color: "#fff", 
        fontFamily: "Arial, sans-serif" 
      }}>
        <header style={{ 
          width: "100%", 
          padding: "20px", 
          background: "#000", 
          borderBottom: "1px solid #333",
          fontSize: "22px",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          AllNow 🚀
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
