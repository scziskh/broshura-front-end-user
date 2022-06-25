/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
};
