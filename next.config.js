/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig
