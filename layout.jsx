import "./globals.css";
export const metadata = { title: "UMKM Store — Sheets", description: "Toko UMKM dari Google Sheets" };
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <nav className="nav">
          <div className="container flex items-center justify-between h-14">
            <a className="font-semibold" href="/">UMKM Store (Sheets)</a>
            <div className="flex gap-3">
              <a className="badge" href="/#fitur">Fitur</a>
              <a className="badge" href="/explore">Explore</a>
            </div>
          </div>
        </nav>
        <main className="container py-8">{children}</main>
        <footer className="container py-10 text-sm text-gray-500">© {new Date().getFullYear()} UMKM Store Sheets</footer>
      </body>
    </html>
  );
}
