/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Update 'ursu-vet' to match your GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/ursu-vet' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ursu-vet' : '',
};

module.exports = nextConfig;

