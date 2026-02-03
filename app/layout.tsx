import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

/* ================= FONTS ================= */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* ================= METADATA ================= */

export const metadata: Metadata = {
  title: "SN Telemedia Services",
  description: "Modern Media & Telemedia Solutions",
  applicationName: "SN Telemedia Service",

  icons: {
    icon: [
      { url: "/favicon1.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};


/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
