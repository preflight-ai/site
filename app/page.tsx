"use client";

import { motion } from "framer-motion";
import { CommandBlock } from "@/components/CommandBlock";
import { TerminalDemo } from "@/components/Demo";
import { FeatureCards } from "@/components/FeatureCards";
import { FlowDiagram } from "@/components/FlowDiagram";
import {
  CheckCircle2,
  Shield,
  Zap,
  Users,
  Code2,
  GitBranch,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="from-zinc-950 to-zinc-900">
      <section className="relative flex flex-col items-center text-center py-28 px-6 text-white overflow-hidden">
        {/* Background glow */}
        <div className="inset-0 bg-[radial-gradient(circle_at_top,rgba(80,80,255,0.15),transparent_60%)]" />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-tight"
        >
          <span className="text-red-500">
            Find <span className="text-white">and</span> Fix
          </span>{" "}
          Critical Issues
          <br className="hidden md:block" />
          Before Production
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10"
        >
          AI-powered pre-commit analysis that detects vulnerabilities, logic
          errors, and unsafe patterns in real-time — catch bugs at commit time,
          not in production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <CommandBlock command="npm i -g @preflight-ai/cli@latest" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-4"
        >
          <Link
            href="https://www.npmjs.com/package/@preflight-ai/cli?activeTab=readme"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-200"
          >
            <span className="text-2xl">📦</span>
            <span className="font-semibold">8k+ installs on npm</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-wrap gap-4 justify-center text-sm"
        >
          <Link
            href="/docs"
            className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
          >
            View Documentation
          </Link>
          <a
            href="https://github.com/preflight-ai/cli"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-zinc-700 hover:border-zinc-600 rounded-lg transition-colors"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 text-sm text-zinc-500"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <span>🛡️</span>
              <span>95% bugs caught early</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Analysis in under 3 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <span>15+ languages supported</span>
            </div>
          </div>
        </motion.div>
      </section>

      <TerminalDemo />
      <FeatureCards />

      {/* How It Works */}
      <FlowDiagram />

      {/* Use Cases Section */}
      <section className="py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Built for <span className="text-red-500">Every</span> Team Size
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            Whether you're a solo founder or an enterprise team, Preflight
            scales with you.
            <br />
            <span className="text-red-400">
              Same powerful AI. Zero complexity.
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/40 hover:bg-zinc-900 transition-colors"
            >
              <Code2 className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Solo Developers</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No code reviewer? No problem. Get instant AI-powered feedback on
                every commit and ship quality code with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/40 hover:bg-zinc-900 transition-colors"
            >
              <Users className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Engineering Teams</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Reduce manual code review burden by 80%. Let AI catch the bugs
                while your team focuses on architecture and business logic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/40 hover:bg-zinc-900 transition-colors"
            >
              <GitBranch className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">
                Open Source Projects
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Maintain high code quality across contributions, educate new
                contributors, and protect your project&apos;s integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 text-white bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose <span className="text-red-500">Preflight AI</span>?
          </h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle2
                className="text-green-500 shrink-0 mt-1"
                size={24}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Catch 95% of Bugs Before Production
                </h3>
                <p className="text-zinc-400">
                  Stop bugs at the source. Detect security vulnerabilities,
                  memory leaks, and logic errors instantly — save hours of
                  debugging later.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <Zap className="text-yellow-500 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Lightning Fast — Analysis in Under 3 Seconds
                </h3>
                <p className="text-zinc-400">
                  Smart caching + incremental analysis = zero workflow
                  disruption. Get instant feedback without breaking your flow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <Shield className="text-blue-500 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Context-Aware AI That Actually Gets Your Code
                </h3>
                <p className="text-zinc-400">
                  Unlike basic linters, our AI understands your entire codebase
                  context, dependencies, and business logic — finding issues
                  others miss.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <Code2 className="text-purple-500 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  15+ Languages — Zero Configuration Required
                </h3>
                <p className="text-zinc-400">
                  JavaScript, TypeScript, Python, Java, Go, C++, Rust, and more.
                  Just install and run — works instantly with your existing
                  stack.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Prop Banner */}
      <section className="py-12 px-6 bg-gradient-to-r from-red-900/20 to-red-500/10 border-y border-red-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-200 font-semibold"
          >
            💡 <span className="text-red-400">Pro tip:</span> The average
            production bug costs <span className="text-white">$5,600</span> to
            fix.
            <br />
            <span className="text-zinc-400 text-base font-normal">
              Catch them at commit time for free with Preflight AI.
            </span>
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Stop Bugs Before They Cost You Money
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 mb-8 text-lg"
          >
            Join 1000+ developers shipping safer code. Free and open source.
            <br />
            <span className="text-zinc-500 text-base">
              Set up in 60 seconds • No credit card • No signup required
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto mb-8"
          >
            <CommandBlock command="npm i -g @preflight-ai/cli" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/docs"
              className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-semibold"
            >
              Get Started
            </Link>
            <a
              href="mailto:support@prefl.run"
              className="px-8 py-3 border border-zinc-700 hover:border-zinc-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
