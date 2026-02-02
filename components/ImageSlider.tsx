"use client";

import { useEffect, useRef, useState } from "react";

/* ===== helper: lấy videoId từ link youtube ===== */
function extractYoutubeId(url?: string) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1);
    }
  } catch {}
  return null;
}

export default function ImageSlider({
  images,
  altBase,
  youtubeUrl,
}: {
  images: string[];
  altBase: string;
  youtubeUrl?: string;
}) {
  const [index, setIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [mediaSize, setMediaSize] = useState<{ w: number; h: number } | null>(
    null
  );

  const videoId = extractYoutubeId(youtubeUrl);

  /* ===== auto slide (chỉ chạy khi đang xem ảnh) ===== */
  useEffect(() => {
    if (!showVideo) startAuto();
    return stopAuto;
  }, [index, showVideo]);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
  };

  const stopAuto = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  /* ===== lấy kích thước ảnh đang hiển thị ===== */
  const captureImageSize = () => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    setMediaSize({
      w: rect.width,
      h: rect.height,
    });
  };

  /* resize theo window */
  useEffect(() => {
    if (!imageRef.current) return;

    const ro = new ResizeObserver(() => {
      captureImageSize();
    });

    ro.observe(imageRef.current);
    return () => ro.disconnect();
  }, [index]);

  return (
    <>
      {/* ================= MAIN IMAGE / VIDEO ================= */}
      <div
        className="main-image"
        onMouseEnter={stopAuto}
        onMouseLeave={() => !showVideo && startAuto()}
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background: "#000",
          borderRadius: 12,
        }}
      >
        {!showVideo ? (
          <img
            ref={imageRef}
            src={images[index]}
            alt={`${altBase} - ảnh ${index + 1}`}
            onLoad={captureImageSize}
            onClick={() => setShowFull(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: "zoom-in",
            }}
          />
        ) : (
          videoId &&
          mediaSize && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                width: mediaSize.w,
                height: mediaSize.h,
                border: 0,
              }}
            />
          )
        )}

        {/* expand icon – chỉ khi là ảnh */}
        {!showVideo && (
          <button
            className="expand-btn"
            onClick={() => setShowFull(true)}
            aria-label="Xem ảnh lớn"
          >
            ⛶
          </button>
        )}

        {/* nav buttons – chỉ khi là ảnh */}
        {!showVideo && (
          <>
            <button
              className="nav-btn left"
              onClick={() =>
                setIndex((i) => (i - 1 + images.length) % images.length)
              }
            >
              ‹
            </button>
            <button
              className="nav-btn right"
              onClick={() =>
                setIndex((i) => (i + 1) % images.length)
              }
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* ================= THUMBNAILS ================= */}
      <div className="thumb-list">
        {images.map((img, i) => (
          <div
            key={i}
            className={`thumb-item ${
              !showVideo && i === index ? "active" : ""
            }`}
            onClick={() => {
              setIndex(i);
              setShowVideo(false);
            }}
          >
            <img src={img} alt={`thumb-${i}`} />
          </div>
        ))}

        {/* video thumbnail */}
        {videoId && (
          <div
            className={`thumb-item video-thumb ${
              showVideo ? "active" : ""
            }`}
            onClick={() => {
              stopAuto();
              setShowVideo(true);
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="video-thumb"
            />
            <span className="play-icon">▶</span>
          </div>
        )}
      </div>

      {/* ================= FULLSCREEN IMAGE ================= */}
      {showFull && !showVideo && (
        <div className="image-modal" onClick={() => setShowFull(false)}>
          <img src={images[index]} alt="preview" />
          <span className="close-btn">✕</span>
        </div>
      )}
    </>
  );
}
