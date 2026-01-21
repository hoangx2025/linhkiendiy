import Link from "next/link";
import { products } from "@/data/products";
import LogoIcon from "@/components/icons/LogoIcon";

export const metadata = {
  title: "Danh sách sản phẩm DIY: buck/boost, cảm biến, linh kiện.",
  description: "Danh sách sản phẩm DIY: buck/boost, cảm biến, linh kiện."
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1 style={{ margin: 0, fontSize: 24 }}>Danh sách sản phẩm</h1>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.55 }}>
          Đang cập nhật...
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
    </main>
  );
}
