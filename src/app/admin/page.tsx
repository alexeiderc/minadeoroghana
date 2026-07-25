"use client";

import { useEffect, useRef, useState } from "react";

export default function AdminPage() {
  const loaded = useRef(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js";
    script.onload = () => setLoading(false);
    document.body.appendChild(script);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="admin-loading"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#181818",
        color: "#C8A24A",
        fontFamily: "system-ui, sans-serif",
        fontSize: "14px",
        gap: "16px",
        zIndex: 9999,
      }}
    >
      <img
        src="/logo.png"
        alt="Mc Quest"
        style={{ height: 48, width: "auto" }}
      />
      <span>Loading Admin Panel...</span>
    </div>
  );
}
