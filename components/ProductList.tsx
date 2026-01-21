"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductTags from "@/components/ProductTags";

export default function ProductList() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  const filteredProducts = tag
    ? products.filter((p) => p.tags.includes(tag))
    : products;

  return (
    <>
      {tag && (
        <div style={{ marginBottom: 12 }}>
          Đang lọc theo tag: <b>{tag}</b>
          <Link href="/" style={{ marginLeft: 10 }}>
            (Bỏ lọc)
          </Link>
        </div>
      )}

      <div className="grid">
        {filteredProducts.map((p) => (
          <div key={p.id} className="card">
            <Link href={`/product/${p.id}`} className="card-link">
              <img src={p.images[0]} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.short}</p>
            </Link>

            <ProductTags tags={p.tags} />
          </div>
        ))}
      </div>
    </>
  );
}
