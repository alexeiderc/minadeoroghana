import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
    icon: "/favicon.png",
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
    <html suppressHydrationWarning className={`${cinzel.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
