import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blue Water Components | SONAR AI — DMSMS & Obsolescence Intelligence",
  description: "SONAR AI is a proactive research tool for DMSMS and obsolescence management. Built by aerospace electronics experts with deep real-world supply chain experience. CMMC Level 1 and NIST 800-171 aligned.",
  keywords: [
    "SONAR AI",
    "DMSMS",
    "obsolescence management",
    "obsolescence intelligence",
    "BOM risk management",
    "aerospace supply chain",
    "defense sustainment",
    "lifecycle management",
    "CMMC compliant",
  ],
  authors: [{ name: "Blue Water Components" }],
  openGraph: {
    title: "SONAR AI | DMSMS & Obsolescence Intelligence by Blue Water Components",
    description: "A proactive AI research tool for DMSMS and obsolescence management. Built by experts who understand real aerospace supply chain challenges. CMMC Level 1 aligned.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "SONAR AI by Blue Water Components" }],
    siteName: "Blue Water Components",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SONAR AI | DMSMS & Obsolescence Management",
    description: "Proactive obsolescence intelligence for aerospace and defense programs. Built from real-world sustainment experience.",
  },
  alternates: {
    canonical: "https://bluewatercomponents.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-silver-100 text-navy-900">
        {children}
      </body>
    </html>
  );
}
