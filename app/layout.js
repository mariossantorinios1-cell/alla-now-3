import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "AllNow",
  description: "The ultimate social + video + gaming platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
