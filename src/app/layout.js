export const metadata = {
  title: "AllNow",
  description: "AllNow - The future of social media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
