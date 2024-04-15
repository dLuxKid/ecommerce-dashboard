"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-xl text-black font-bold mb-4">Page not found</h1>
      <div>
        <Link href={"/"}>
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
