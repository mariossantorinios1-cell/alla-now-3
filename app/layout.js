export const metadata = {
  title: "AllNow",
  description: "The best social + video + streaming platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000",
          color: "#fff",
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
