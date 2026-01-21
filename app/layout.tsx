import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  //metadataBase: new URL("http://localhost:3000"),
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Shop DIY",
    template: "%s | Shop DIY"
  },
  description: "Danh sách sản phẩm DIY: mạch buck/boost, cảm biến, linh kiện.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Shop DIY",
    description: "Danh sách sản phẩm DIY: buck/boost, cảm biến, linh kiện.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
