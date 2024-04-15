import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THCO - frontend task",
  description: "My completed task for the THC assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <div className="min-h-screen relative flex w-screen border-purple-900">
          <Sidebar />
          <div className="w-full ml-[88px] nav:ml-[296px] max-w-screen-2xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
