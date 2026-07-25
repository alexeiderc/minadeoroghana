"use client";

import { useEffect, useRef } from "react";

export default function AdminPage() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#181818",
        color: "#C8A24A",
        fontFamily: "system-ui, sans-serif",
        fontSize: "14px",
      }}
    >
      Loading Admin Panel...
    </div>
  );
}
