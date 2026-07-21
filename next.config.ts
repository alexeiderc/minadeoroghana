import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
