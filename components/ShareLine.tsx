"use client";

import ShareIcon from "@/components/icons/ShareIcon";

export default function ShareLine() {
  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Đã copy link");
    }
  };

  return (
    <div className="contact-line share-line" onClick={handleShare}>
      <ShareIcon />
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "6px 0",
          fontSize: 14,
        }}
      >
        Chia sẻ
      </span>
    </div>
  );
}
