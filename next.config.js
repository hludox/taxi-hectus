/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },
  // redirections existantes (si utiles)
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/planning',
        permanent: true,
      },
    ];
  },
  // Headers de sécurité et cache — appliqués seulement en production
  async headers() {
    if (!isProd) return [];
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Cache long pour assets statiques (images, js, css)
          // ATTENTION: si tu change souvent les assets, invalide le cache via nouveau nom de fichier ou versionning
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;