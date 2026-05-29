/** @type {import('next').NextConfig} */
const nextConfig = {
  // Recommended for Azure Static Web Apps (hybrid Next.js mode)
  // Reduces deployment size and improves build/deploy times.
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Note for Azure Static Web Apps:
    // Local /public images work great. For external images, consider
    // unoptimized: true if you hit limitations with the Next.js image optimizer.
  },
};

export default nextConfig;
