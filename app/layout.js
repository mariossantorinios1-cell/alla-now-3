import "./globals.css";

export const metadata = {
  title: "AllNow",
  description: "All-in-one social platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
