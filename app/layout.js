import './globals.css';

export const metadata = {
  title: 'AllNow',
  description: 'AllNow Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
