import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "YOSU | Youth Ottawa Sports Universe",
  description:
    "You play the game with the heart and mind. Join YOSU for youth sports programs in Ottawa, including soccer, basketball, and tennis.",
  keywords:
    "YOSU, Youth Ottawa Sports Universe, youth sports, soccer, basketball, tennis, Ottawa sports, youth leagues",
  authors: [{ name: "YOSU Team", url: "https://yosu.vercel.app" }],
  openGraph: {
    type: "website",
    url: "https://yosu.vercel.app",
    title: "YOSU | Youth Ottawa Sports Universe",
    description:
      "Join YOSU and empower young athletes through skill-building and teamwork in various sports leagues.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yosu",
    title: "YOSU | Youth Ottawa Sports Universe",
    description:
      "Join YOSU and empower young athletes through skill-building and teamwork.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yosu.vercel.app" />
        <meta
          property="og:title"
          content="YOSU | Youth Ottawa Sports Universe"
        />
        <meta
          property="og:description"
          content="You play the game with the heart and mind. Join YOSU for youth sports programs in Ottawa."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="YOSU | Youth Ottawa Sports Universe"
        />
        <meta
          name="twitter:description"
          content="Join YOSU and empower young athletes through skill-building and teamwork."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Youth Ottawa Sports Universe",
              url: "https://yosu.vercel.app",
              sameAs: [
                "https://www.facebook.com/YOSU",
                "https://twitter.com/YOSU",
                "https://www.instagram.com/YOSU",
              ],
              description:
                "YOSU provides youth sports programs in Ottawa, including soccer, basketball, and tennis.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-555-5555",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
