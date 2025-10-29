"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50  bg-zinc-900 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between text-zinc-100">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-end gap-1 text-2xl font-semibold  transition-colors"
        >
          Prefl
          <sup className="text-lg text-red-500 font-normal">.run</sup>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <Link
            href="/docs"
            className="hidden md:inline-flex text-zinc-400 hover:text-white text-sm transition-colors px-3 py-2"
          >
            Docs
          </Link>

          <Link
            href="/faq"
            className="hidden md:inline-flex text-zinc-400 hover:text-white text-sm transition-colors px-3 py-2"
          >
            FAQ
          </Link>

          <a
            href="https://github.com/preflight-ai/cli"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-zinc-400 hover:text-white text-sm transition-colors px-3 py-2"
          >
            GitHub
          </a>

          <Button
            asChild
            variant="default"
            className="bg-red-500 hover:bg-red-600 rounded-lg text-white font-medium shadow-md text-sm"
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
