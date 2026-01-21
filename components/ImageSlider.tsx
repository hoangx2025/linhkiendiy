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
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide 3s
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
    <div>
      {/* Ảnh lớn */}
      <div
        className="main-image"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        <img
          src={images[index]}
          alt={`${altBase} - ảnh ${index + 1}`}
        />

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

      {/* Thumbnail */}
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
    </div>
  );
}
