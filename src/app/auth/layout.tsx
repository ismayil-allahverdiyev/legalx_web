import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <div className={` m-8 h-full`}>
      <div className="flex items-center pb-8">
        <div className="w-12 h-12 bg-gray-500 rounded-full" />
        <p className="text-2xl font-bold ml-2">
          LegalX
        </p>
      </div>
      {children}
    </div>
  );
}
