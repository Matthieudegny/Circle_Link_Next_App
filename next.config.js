/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      // "lh3.googleusercontent.com",
      "cdn.pixabay.com",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
      "images.freeimages.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.freeimages.com",
        port: "",
        pathname: "/images/large-previews/31a/traverse-1234278.jpg",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
