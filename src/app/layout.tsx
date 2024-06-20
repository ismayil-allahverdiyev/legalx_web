import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";

import './globals.css'

const inria = Inria_Sans(
  {
    weight: ["300", "400", "700"],
    subsets: ["latin"],
  }
);

export const metadata: Metadata = {
  title: "LegalX - The Legal Experience Platform",
  description: "LegalX is the legal experience platform for the modern law firm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inria.className}>{children}</body>
    </html>
  );
}
