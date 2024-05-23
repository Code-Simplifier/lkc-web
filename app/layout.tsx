import type { Metadata } from "next";
import { primary } from "./fonts";

import Navbar from "@/components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lyallpur Khalsa College",
  description: "Jalandhar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primary.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
