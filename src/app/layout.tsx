import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.intro,
  keywords: ["Piyush Khare", "Full Stack Developer", "Next.js", "React", "TypeScript", "Node.js", "Java", "Portfolio"],
  authors: [{ name: profile.name, url: profile.socials.github }],
  icons: { icon: "/portfolio-logo.svg" },
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.role}`,
    description: profile.intro,
    url: profile.siteUrl,
    siteName: profile.name,
    images: [{ url: "/avatar.png", width: 801, height: 868, alt: profile.name }],
  },
  twitter: { card: "summary", title: `${profile.name} — ${profile.role}`, description: profile.intro, images: ["/avatar.png"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
};

// Page paint hone se pehle theme set karo, taaki flash na ho
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d)}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] btn btn-primary">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
