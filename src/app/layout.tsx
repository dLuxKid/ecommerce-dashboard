import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Dashboard",
  description:
    "A comprehensive dashboard for ecommerce platforms, showcasing sales, customer orders, inventory, and customer conversations.",
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
