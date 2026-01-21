import Link from "next/link";
import { products } from "@/data/products";
import LogoIcon from "@/components/icons/LogoIcon";

export const metadata = {
  title: "Danh sách sản phẩm",
  description: "Danh sách sản phẩm DIY: buck/boost, cảm biến, linh kiện."
};

export default function HomePage() {
  return (
    <main>
      <header style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between", padding: "16px 0 10px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LogoIcon size={48} className="logo-color" />
          <div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Linh kiện DIY Hà Nội</div>
            <div style={{ color: "var(--muted)", fontSize: 14, marginTop: 2 }}>Danh sách sản phẩm • 2 trang (List + Detail)</div>
          </div>
        </div>

        <div className="pill">{products.length} sản phẩm</div>
      </header>

      <section className="hero">
        <h1 style={{ margin: 0, fontSize: 24 }}>Danh sách sản phẩm</h1>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.55 }}>
          SEO: Server-rendered, metadata chuẩn, OpenGraph, robots, sitemap/robots, và Product JSON-LD ở trang chi tiết.
        </p>
      </section>

      <div className="grid" aria-label="Danh sách sản phẩm">
        {products.map((p) => (
          <Link href={`/product/${p.id}`} className="card product-card" key={p.id}  >
            <div className="thumb">
              <img src={p.images?.[0]} alt={p.name} />
            </div>

            <div className="card-body">
              <h2 className="title">{p.name}</h2>
              <p className="meta">{p.short}</p>

              <div className="tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="card-footer">
                <span className="view-link">Xem chi tiết →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <footer style={{ color: "var(--muted)", fontSize: 13, padding: "22px 0" }}>
        © {new Date().getFullYear()} Linh kiện DIY Hà Nội.
      </footer>
    </main>
  );
}
