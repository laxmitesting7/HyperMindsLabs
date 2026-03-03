import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CosmicAnalyticsProvider } from "cosmic-analytics";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hypermindslabs.com'),
  title: "HyperMindsLabs – Build SaaS, MVPs & Internal Tools That Scale",
  description:
    "HyperMindsLabs builds AI-powered SaaS products for global users and helps startups and enterprises launch MVPs, SaaS tools, and internal platforms faster.",
  keywords:
    "HyperMindsLabs, SaaS development, MVP builder, internal tools, AI tools, SaaS startup studio, enterprise software development, software product development",
  authors: [{ name: "HyperMindsLabs" }],
  robots: "index, follow",
  openGraph: {
    title: "HyperMindsLabs – SaaS Products & MVP Builders",
    description:
      "From building our own world-class SaaS tools to helping you build yours, HyperMindsLabs is the global launchpad for AI-powered software.",
    url: "https://hypermindslabs.com",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "HyperMindsLabs Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperMindsLabs – AI SaaS Products & Enterprise MVPs",
    description:
      "HyperMindsLabs builds scalable AI-powered SaaS products and enterprise MVPs — fast, elegant, and global.",
    images: ["/banner.png"],
    site: "@hypermindslabs",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://hypermindslabs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="trustpilot-one-time-domain-verification-id" content="d3efe7e3-864f-4d94-8eb2-c564047e3db3" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ backgroundColor: "#faf6f2" }}
      >
        <Navbar />
        <main>
          <CosmicAnalyticsProvider>{children}</CosmicAnalyticsProvider>
        </main>
      </body>
    </html>
  );
}
