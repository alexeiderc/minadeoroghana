"use client";

import { useEffect, useState } from "react";

export default function useMarkerIcon() {
  const [icon, setIcon] = useState<import("leaflet").Icon | null>(null);

  useEffect(() => {
    (async () => {
      const L = (await import("leaflet")).default;

      const goldIcon = new L.Icon({
        iconUrl: "/markers/marker-gold.svg",
        iconRetinaUrl: "/markers/marker-gold.svg",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
      });

      // @ts-expect-error — Leaflet default icon fix
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "/markers/marker-gold.svg",
        iconRetinaUrl: "/markers/marker-gold.svg",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      setIcon(goldIcon);
    })();
  }, []);

  return icon;
}
