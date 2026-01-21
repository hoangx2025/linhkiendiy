"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initGA, trackPage } from "@/lib/ga";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPage(pathname);
  }, [pathname]);

  return (
    <html lang="vi">
      <body>
        <div className="app-layout">
          <header className="site-header">
            <div className="container header-inner">
              <a href="/" className="logo">Linh kiện DIY Hà Nội</a>
            </div>
          </header>

          <main className="site-main">
            <div className="container">
              {children}
            </div>
          </main>

          <footer className="site-footer">
            <div className="container">
              © {new Date().getFullYear()} Linh kiện DIY Hà Nội.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}