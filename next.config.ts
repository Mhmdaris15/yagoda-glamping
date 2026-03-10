import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yagoda-glamping",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
