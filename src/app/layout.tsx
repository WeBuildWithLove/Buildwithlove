import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Layout from "@/layout";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeCr8t",
  description:
    "At WeCr8t, we craft stunning, high-quality websites and web applications for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
