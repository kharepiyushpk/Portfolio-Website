// Site ka public URL (SEO, sitemap, share previews ke liye).
// Order: NEXT_PUBLIC_SITE_URL (custom domain lagao to yahan) → Vercel ka production domain
// (Vercel build pe khud set karta hai) → local dev.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || (vercel ? `https://${vercel}` : "http://localhost:3000")
).replace(/\/$/, "");
