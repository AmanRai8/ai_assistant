/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.clerk.com", // Clerk user profile images
      "images.clerk.dev", // sometimes Clerk uses this
    ],
  },
};

module.exports = nextConfig;
