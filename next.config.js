/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
      "images.freeimages.com",
      "https://images.freeimages.com/images/large-previews/31a/traverse-1234278.jpg",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.freeimages.com",
        port: "",
        pathname: "/images/large-previews/31a/traverse-1234278.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
