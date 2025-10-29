"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-zinc-900 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between text-zinc-100">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-end gap-1 text-2xl font-semibold transition-colors"
        >
          Prefl
          <sup className="text-lg text-red-500 font-normal">.run</sup>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/docs"
            className="text-zinc-400 hover:text-white text-sm transition-colors px-3 py-2"
          >
            Docs
          </Link>

          <Link
            href="/faq"
            className="text-zinc-400 hover:text-white text-sm transition-colors px-3 py-2"
          >
            FAQ
          </Link>

          <a
            href="https://github.com/preflight-ai/cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white text-sm transition-colors px-3 py-2"
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-800 bg-zinc-900"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              <Link
                href="/docs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white text-sm transition-colors px-3 py-3 rounded-lg hover:bg-zinc-800"
              >
                Docs
              </Link>

              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white text-sm transition-colors px-3 py-3 rounded-lg hover:bg-zinc-800"
              >
                FAQ
              </Link>

              <a
                href="https://github.com/preflight-ai/cli"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-400 hover:text-white text-sm transition-colors px-3 py-3 rounded-lg hover:bg-zinc-800"
              >
                GitHub
              </a>

              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center bg-red-500 hover:bg-red-600 rounded-lg text-white font-medium py-3 px-4 transition-colors"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
