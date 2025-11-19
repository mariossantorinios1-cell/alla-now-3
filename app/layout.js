export const metadata = {
  title: "AllNow",
  description: "The ultimate social + video platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
