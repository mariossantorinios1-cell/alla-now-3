import "./globals.css";

export const metadata = {
  title: "AllNow",
  description: "All social + gaming + streaming in one platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
