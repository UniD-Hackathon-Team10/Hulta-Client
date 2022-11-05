/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://picsum.photos"],
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  ...nextConfig,
});

module.exports = withPWA({
  // images: {
  //   domains: ["https://picsum.photos"],
  // },
});
