import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mina De Oro Ghana | Sustainable Gold Mining",
    template: "%s | Mina De Oro Ghana",
  },
  description:
    "Mina De Oro Ghana — surface gold mining in Ghana's Eastern Region using LiDAR 3D drone technology and non-mercury, cyanide-free gold recovery.",
  keywords: [
    "gold mining",
    "Ghana",
    "sustainable mining",
    "LiDAR",
    "non-mercury",
    "cyanide-free",
    "Eastern Region",
  ],
  authors: [{ name: "Mina De Oro Ghana" }],
  creator: "Mina De Oro Ghana",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mina De Oro Ghana",
    title: "Mina De Oro Ghana | Sustainable Gold Mining",
    description:
      "Surface gold mining in Ghana's Eastern Region using LiDAR 3D drone technology and non-mercury, cyanide-free gold recovery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina De Oro Ghana | Sustainable Gold Mining",
    description:
      "Surface gold mining in Ghana's Eastern Region using LiDAR 3D drone technology and non-mercury, cyanide-free gold recovery.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
