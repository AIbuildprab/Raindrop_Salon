/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist/public',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['localhost', '*.replit.dev', '*.janeway.replit.dev'],
};

export default nextConfig;
