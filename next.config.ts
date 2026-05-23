import type { NextConfig } from "next";

const securityHeaders = [
  // Empêche le site d'être chargé dans une iframe (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Empêche le sniffing de type MIME
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Réduit les infos de referrer envoyées aux tiers
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Désactive les APIs sensibles non utilisées
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // CSP : autorise scripts/styles inline (requis par Next.js + Framer Motion),
  // et les connexions vers Supabase uniquement
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
