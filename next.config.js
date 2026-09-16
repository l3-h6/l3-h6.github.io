/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_EXPORT === "true" ? "export" : "standalone",
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons'
      },
    ],
  },
};

module.exports = nextConfig;
