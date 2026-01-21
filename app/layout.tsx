
import type { Metadata } from "next";
import "./globals.css";
import LogoIcon from "@/components/icons/LogoIcon";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Shop DIY",
    template: "%s | Shop DIY"
  },
  description: "Danh sách sản phẩm DIY: buck/boost, cảm biến, linh kiện."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <div className="app-layout">
          <header className="site-header">
            <div className="container header-inner">
             <a href="/">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <LogoIcon size={48} className="logo-color" />
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800 }}>Linh kiện DIY Hà Nội</div>
                  </div>
                </div>  
             </a>
            </div>

            
          </header>

          <main className="site-main">
            <div className="container site-main-inner">
              {children}
            </div>
          </main>

          <footer className="site-footer">
            <div className="container footer-inner">
              © {new Date().getFullYear()} Linh kiện DIY Hà Nội.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
