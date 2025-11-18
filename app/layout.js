import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "AllNow",
  description: "All-in-one platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-black text-white">
        <Sidebar />
        <main className="ml-20 sm:ml-64 w-full p-4">{children}</main>
      </body>
    </html>
  );
}
