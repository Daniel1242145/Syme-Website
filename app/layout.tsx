import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://symecleaning.co.nz"),
  title: {
    default: "Syme Cleaning | Window, Carpet & Commercial Cleaning",
    template: "%s | Syme Cleaning",
  },
  description: "Window, carpet and commercial cleaning across Christchurch, Kaiapoi, Rangiora, Lincoln and Rolleston.",
  openGraph: {
    title: "Syme Cleaning | Reliable cleaning. Easy booking.",
    description: "Window, carpet and commercial cleaning across Christchurch and surrounding areas.",
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
      <body>{children}</body>
    </html>
  );
}
