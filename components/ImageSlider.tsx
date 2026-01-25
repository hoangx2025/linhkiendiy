"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageSlider({
  images,
  altBase,
}: {
  images: string[];
  altBase: string;
}) {
  const [index, setIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [index]);

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

  return (
    <>
      {/* Main image */}
      <div
        className="main-image"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        <img
          src={images[index]}
          alt={`${altBase} - ảnh ${index + 1}`}
          onClick={() => setShowFull(true)}
        />

        {/* Expand icon */}
        <button
          className="expand-btn"
          onClick={() => setShowFull(true)}
          aria-label="Xem ảnh lớn"
        >
          ⛶
        </button>

        {/* Nav buttons */}
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
      </div>

      {/* Thumbnails */}
      <div className="thumb-list">
        {images.map((img, i) => (
          <div
            key={i}
            className={`thumb-item ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <img src={img} alt={`thumb-${i}`} />
          </div>
        ))}
      </div>

      {/* Fullscreen preview */}
      {showFull && (
        <div className="image-modal" onClick={() => setShowFull(false)}>
          <img src={images[index]} alt="preview" />
          <span className="close-btn">✕</span>
        </div>
      )}
    </>
  );
}
