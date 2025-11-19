export const metadata = {
  title: "AllNow",
  description: "The best next-gen platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
