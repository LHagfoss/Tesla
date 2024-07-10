import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import tesla from "../public/tesla.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tesla",
  description: "Redisign By Lucas Hagfoss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={tesla.src} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}