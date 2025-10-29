"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Mail, Heart, Github, Code2, Shield, Zap } from "lucide-react";

export default function DonatePage() {
  return (
    <main className="min-h-screen from-zinc-950 to-zinc-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Support Prefl<sup className="text-red-500">.run</sup>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto"
          >
            Prefl.run is built by independent developers for developers. Every
            donation helps us maintain open-source AI tools that improve code
            quality and security for everyone.
          </motion.p>
        </div>

        {/* Donation Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="https://opencollective.com/preflight-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cursor-pointer flex items-center gap-2 px-8 py-6 text-base">
              <Image
                src="/opencollective-logo.webp"
                alt="Open Collective"
                width={24}
                height={24}
                priority
              />
              Donate via Open Collective
              <Heart className="text-red-400" size={18} />
            </Button>
          </Link>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Your Support Powers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/40 text-center">
              <Code2 className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Active Development</h3>
              <p className="text-zinc-400 text-sm">
                New features, bug fixes, and continuous improvements
              </p>
            </div>
            <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/40 text-center">
              <Shield className="text-green-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Better AI Models</h3>
              <p className="text-zinc-400 text-sm">
                Access to advanced Groq AI analysis capabilities
              </p>
            </div>
            <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/40 text-center">
              <Zap className="text-yellow-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Infrastructure</h3>
              <p className="text-zinc-400 text-sm">
                Hosting, servers, and reliable service uptime
              </p>
            </div>
          </div>
        </motion.div>

        {/* Transparency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16 bg-zinc-900/30 border border-zinc-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">100% Transparent</h2>
          <p className="text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Your support directly funds development, hosting, and new Groq AI
            analysis models. We&apos;re fully transparent — every contribution
            goes back into improving Prefl.run for the developer community.
          </p>
          <p className="text-zinc-300 mt-6 font-semibold">
            Thank you for believing in tools that make code safer, smarter, and
            open for everyone. 🚀
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="border-t border-zinc-800 pt-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto">
            Have questions about donations, partnerships, or anything else?
            We&apos;d love to hear from you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:support@prefl.run"
              className="flex items-center gap-3 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              <Mail size={20} />
              <div className="text-left">
                <div className="text-sm text-zinc-400">Email us at</div>
                <div className="font-semibold">support@prefl.run</div>
              </div>
            </a>

            <a
              href="https://github.com/preflight-ai/cli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-zinc-700 hover:border-zinc-600 rounded-lg transition-colors"
            >
              <Github size={20} />
              <div className="text-left">
                <div className="text-sm text-zinc-400">Star us on</div>
                <div className="font-semibold">GitHub</div>
              </div>
            </a>
          </div>

          <p className="text-zinc-500 text-sm text-center mt-8">
            For general questions, feature requests, or bug reports, please
            reach out via email or open an issue on GitHub.
          </p>
        </motion.div>

        {/* Other Ways to Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-xl font-bold mb-4">Other Ways to Support</h2>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <a
              href="https://github.com/preflight-ai/cli"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              ⭐ Star on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
