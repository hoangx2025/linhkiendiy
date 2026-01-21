import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ImageSlider from "@/components/ImageSlider";
import { getProductById, products } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import PhoneIcon from "@/components/icons/PhoneIcon";
import MailIcon from "@/components/icons/MailIcon";
import CopyLinkButton from "@/components/CopyLinkButton";
import ShareButton from "@/components/ShareButton";
import ShareIcon from "@/components/icons/ShareIcon";
import ShareLine from "@/components/ShareLine";
import LogoIcon from "@/components/icons/LogoIcon";
/* ============================
   Types (Next.js 15 chuẩn)
============================ */
type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

/* ============================
   Static params
============================ */
export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}

/* ============================
   Metadata (SEO)
============================ */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { id } = await params;
  const p = getProductById(id);

  if (!p) return {};

  return {
    title: p.name,
    description: p.short,
    alternates: {
      canonical: `/product/${p.id}`,
    },
    openGraph: {
      title: p.name,
      description: p.short,
      type: "website",
      images: p.images,
    },
  };
}

/* ============================
   Page
============================ */
export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const p = getProductById(id);

  if (!p) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description || p.short,
    category: p.category,
    image: p.images,
    offers: {
      "@type": "Offer",
      priceCurrency: p.currency,
      price: String(p.price),
      availability: "https://schema.org/InStock",
      url: `/product/${p.id}`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: p.name,
        item: `/product/${p.id}`,
      },
    ],
  };

  return (
    <main style={{ paddingTop: 12 }}>
      {/* Header */}
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="hero">
        <h1 style={{ margin: 0, fontSize: 24 }}>{p.name}</h1>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.55 }}>
          {p.short}
        </p>
      </section>

      {/* Content */}
      <div
        className="product-layout"
        style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 18, marginTop: 16 }}
      >
        {/* Left */}
        <div>
          <ImageSlider images={p.images} altBase={p.name} />

          <div className="card" style={{ marginTop: 16 }}>
            <div style={{ padding: 16 }}>
              <h2 style={{ margin: "0 0 8px", fontSize: 16 }}>Mô tả</h2>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65 }}>
                {p.description}
              </p>

              <div className="tags" style={{ marginTop: 12 }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
                <span className="tag">{p.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <aside className="card">
          <div style={{ padding: 16 }}>
            <div style={{ marginTop: 12 }}>
              {siteConfig.showPrice ? (
                <div style={{ fontSize: 22, fontWeight: 700 }}>
                  {new Intl.NumberFormat("vi-VN").format(p.price)} {p.currency}
                </div>
              ) : (
                <div style={{ fontSize: 15, lineHeight: 1.6 }}>
                <div className="contact-line">
                  <PhoneIcon />
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                    {siteConfig.contact.phone}
                  </a>
                </div>

                  <div className="contact-line">
                    <MailIcon />
                    <a href={`mailto:${siteConfig.contact.email}`}>
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              )}
            </div>
            <ShareLine />

            <div style={{
              marginTop: 28,
              padding: 14,
              borderRadius: 14,
              border: "0.5px solid var(--border)",
            }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>
                Tối ưu SEO
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Product + Breadcrumb JSON-LD</li>
                <li>Metadata render server</li>
                <li>URL chuẩn SEO</li>
              </ul>
            </div>

            {/* <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
              <ShareButton
                title={p.name}
                url={`${process.env.NEXT_PUBLIC_SITE_URL}/product/${p.id}`}
              />
            </div> */}
          </div>
        </aside>
      </div>
    </main>
  );
}
