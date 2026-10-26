/** @type {import('next').NextConfig} */

// Local `next dev` needs eval and the HMR websocket. Production headers are
// what Vercel and `next start` serve. Do not send HSTS from the dev server.
const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  // 'unsafe-inline' covers the Next.js bootstrap scripts and the static JSON-LD
  // block (a constant, rendered as text). next/font self-hosts Inter, so font
  // and style sources stay on this origin; inline font CSS still needs 'unsafe-inline'.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  // mailto: is the contact form's no-JS fallback. There is no cross-origin form endpoint.
  "form-action 'self' mailto:",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  // Matches staticwebapp.config.json: camera, microphone, and geolocation stay off.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  ...(isDev
    ? []
    : [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }]),
];

const nextConfig = {
  // Recommended for Azure Static Web Apps (hybrid Next.js mode).
  // Vercel ignores `output: 'standalone'` and still applies `headers()` below.
  output: "standalone",

  // Images are files in /public, referenced with plain <img>. Do not add
  // images.remotePatterns with hostname "**" — that turns /_next/image into
  // an open proxy.

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
