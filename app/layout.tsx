import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://symecleaning.co.nz"),
  title: {
    default: "Syme Cleaning | Home, Commercial & Specialist Cleaning",
    template: "%s | Syme Cleaning",
  },
  description: "Home, commercial, builders’ and exterior cleaning across Christchurch, Kaiapoi, Rangiora, Lincoln and Rolleston.",
  openGraph: {
    title: "Syme Cleaning | Specialist cleaning across Christchurch",
    description: "Home, commercial, builders’ and exterior cleaning across Christchurch and surrounding areas.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syme Cleaning | Reliable cleaning. Easy booking.",
    description: "Window, carpet and commercial cleaning across Christchurch and surrounding areas.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
