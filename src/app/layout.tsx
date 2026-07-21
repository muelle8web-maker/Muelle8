import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { restaurantSchema, webSiteSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/business";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Muelle 8 | Baja Inspired Seafood in National City",
    template: "%s | Muelle 8",
  },
  description:
    "Fresh ceviche, aguachile, and seafood cocktails made to order at Market on 8th food hall in National City, CA — Baja-inspired seafood in the San Diego area.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Muelle 8",
    locale: "en_US",
    images: [{ url: "/images/hero.jpg", width: 1376, height: 768, alt: "Muelle 8 — Baja Inspired Seafood" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <JsonLd data={restaurantSchema} />
        <JsonLd data={webSiteSchema} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
