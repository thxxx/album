import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/googleanalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sleeve studio",
  description: "The Best album cover image generation with one click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-L9N5X3RYXC" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <Provider>{}</Provider> */}
      </body>
    </html>
  );
}
