import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DiscountPopup } from "@/components/DiscountPopup";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Syme Carpet Cleaning | Carpet Cleaning Christchurch",
    template: "%s | Syme Carpet Cleaning",
  },
  description:
    "Professional Carpet Cleaning Christchurch, Commercial Cleaning Christchurch, End of Tenancy Cleaning Christchurch, Upholstery Cleaning Christchurch and Window Cleaning Christchurch.",
  metadataBase: new URL("https://symecleaning.co.nz"),
  openGraph: {
    title: "Syme Carpet Cleaning Christchurch",
    description:
      "Premium carpet cleaning and property cleaning services across Christchurch, NZ.",
    url: "https://symecleaning.co.nz",
    siteName: "Syme Carpet Cleaning",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <DiscountPopup />
      </body>
    </html>
  );
}
