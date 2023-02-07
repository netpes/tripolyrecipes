/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  nextConfig : {
    reactStrictMode: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://tripolyrecipes.vercel.app/',
      },
    ]
  },
};


