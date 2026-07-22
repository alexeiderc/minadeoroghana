"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import useMarkerIcon from "@/hooks/use-marker-icon";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface MapMarker {
  id: string;
  name: string;
  type: string;
  lat: number;
  lng: number;
  description: string;
}

interface MapSectionProps {
  markers?: MapMarker[];
  center?: [number, number];
  zoom?: number;
  scrollWheelZoom?: boolean;
  height?: string;
}

export default function MapSection({
  markers = [],
  center = [7.9465, -1.0232],
  zoom = 7,
  scrollWheelZoom = false,
  height = "500px",
}: MapSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const icon = useMarkerIcon();

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 640);
  }, []);

  const mapHeight = mounted && isMobile ? "50vh" : height;

  if (!mounted) {
    return (
      <div className="w-full bg-slate-custom/5 rounded-2xl flex items-center justify-center" style={{ height: mapHeight }}>
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-gold-100/30" style={{ height: mapHeight, isolation: "isolate", position: "relative" }}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        zoomControl={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {icon && markers.map((marker) => (
          <Marker key={marker.id} position={[marker.lat, marker.lng]} icon={icon}>
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-sm">{marker.name}</h3>
                <p className="text-xs text-gray-500 capitalize">{marker.type}</p>
                <p className="text-xs mt-1">{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
