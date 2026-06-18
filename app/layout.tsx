import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harsh-vishwakarma.dev"),
  title: "Harsh Vishwakarma | Backend Engineer",
  description:
    "Portfolio of Harsh Vishwakarma, a backend engineer specializing in AWS automation, distributed systems, FastAPI, Python, and high-performance SaaS platforms.",
  openGraph: {
    title: "Harsh Vishwakarma | Backend Engineer",
    description:
      "Backend engineer specializing in AWS automation, distributed systems, FastAPI, Python, and high-performance SaaS platforms.",
    url: "https://harsh-vishwakarma.dev",
    siteName: "Harsh Vishwakarma Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Harsh Vishwakarma backend engineer portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Vishwakarma | Backend Engineer",
    description:
      "Backend engineer specializing in AWS automation, distributed systems, FastAPI, Python, and high-performance SaaS platforms.",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        <div className="relative min-h-screen overflow-hidden">
          <div className="grid-mask pointer-events-none fixed inset-0 opacity-30" />
          <div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-cyan/50" />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          <BackToTop />
          <CustomCursor />
        </div>
      </body>
    </html>
  );
}
