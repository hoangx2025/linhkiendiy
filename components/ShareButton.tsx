"use client";

import ShareIcon from "@/components/icons/ShareIcon";
export default function ShareButton({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("Đã copy link sản phẩm!");
    }
  };

  return (
    <button type="button" className="btn share-btn" onClick={handleShare}>
      <ShareIcon />
      <span>Chia sẻ</span>
    </button>
  );
}
