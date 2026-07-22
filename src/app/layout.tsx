import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MC QUEST GOLD & DIAMOND MINING INDUSTRY LTD",
    template: "%s | MC QUEST GOLD & DIAMOND MINING INDUSTRY LTD",
  },
  description:
    "MC QUEST GOLD & DIAMOND MINING INDUSTRY LTD — sustainable gold and diamond mining in Ghana's Eastern Region using LiDAR 3D drone technology and non-mercury, cyanide-free recovery.",
  keywords: [
    "gold mining",
    "Ghana",
    "sustainable mining",
    "LiDAR",
    "non-mercury",
    "cyanide-free",
    "Eastern Region",
    "MC QUEST",
  ],
  authors: [{ name: "MC QUEST GOLD & DIAMOND MINING INDUSTRY LTD" }],
  creator: "MC QUEST GOLD & DIAMOND MINING INDUSTRY LTD",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MC QUEST GOLD & DIAMOND MINING INDUSTRY LTD",
    title: "MC QUEST GOLD & DIAMOND MINING INDUSTRY LTD",
    description:
      "Sustainable gold and diamond mining in Ghana's Eastern Region using LiDAR 3D drone technology and non-mercury, cyanide-free recovery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MC QUEST GOLD & DIAMOND MINING INDUSTRY LTD",
    description:
      "Sustainable gold and diamond mining in Ghana's Eastern Region using LiDAR 3D drone technology and non-mercury, cyanide-free recovery.",
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
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
