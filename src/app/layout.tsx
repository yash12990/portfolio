import type { Metadata, Viewport } from "next";
import "./globals.css";
import { geistSans, geistMono } from "./fonts/fonts";
import { cn } from "@/lib/utils";
import { site } from "@/data/portfolio";
import Background from "@/components/shared/background";
import Header from "@/components/shared/header";
import FooterSection from "@/components/sections/footer-section";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Yash Gupta",
    "Frontend Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer",
    "Frontend Engineer India",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: [
      {
        url: "/hero-img.webp",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: ["/hero-img.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#05080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark scroll-smooth",
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <body className="relative min-h-dvh bg-ink font-sans text-foreground">
        <Background />
        <Header />
        <main className="relative z-10">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
