"use client";

import { useState } from "react";
import { extractYoutubeId } from "@/utils/youtube";

export default function YoutubeThumb({ url }: { url: string }) {
  const [open, setOpen] = useState(false);
  const videoId = extractYoutubeId(url);

  if (!videoId) return null;

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        style={{
          cursor: "pointer",
          position: "relative",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="Video YouTube"
          style={{ width: "100%", display: "block" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "#ff0000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            ▶
          </div>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.6)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            width="900"
            height="506"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ borderRadius: 12 }}
          />
        </div>
      )}
    </>
  );
}
