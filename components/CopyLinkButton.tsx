"use client";

import { useState } from "react";

export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const fullUrl = window.location.origin + url;
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button className="btn" type="button" onClick={handleCopy}>
      {copied ? "Đã copy ✓" : "Copy link"}
    </button>
  );
}
