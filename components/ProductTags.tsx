"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ProductTags({ tags }: { tags: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");

  return (
    <div className="tags">
      {tags.map((t) => (
        <button
          key={t}
          className={`tag ${activeTag === t ? "active" : ""}`}
          onClick={() => {
            router.push(
              activeTag === t ? "/" : `/?tag=${encodeURIComponent(t)}`
            );
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
