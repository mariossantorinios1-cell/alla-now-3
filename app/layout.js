import "./globals.css";

export const metadata = {
  title: "AllNow",
  description: "All social, video, gaming and live features in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
