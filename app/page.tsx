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
          </span>
          <h1>
            Prefl<sup className="text-red-500">.run</sup>
          </h1>
          <br className="hidden md:block" />
          critical issues before they fly on production
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10"
        >
          Preflight AI uses real-time Groq intelligence to analyze your staged
          code and detect vulnerabilities, logic errors, and unsafe patterns —
          automatically, before you commit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <CommandBlock command="npm i -g @preflight-ai/cli@latest" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-sm text-zinc-500"
        >
          No installation required • Get started in seconds
        </motion.p>

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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 text-sm text-zinc-500"
        >
          Trusted by developers building faster, safer codebases.
        </motion.p>

        <TerminalDemo />
        <FeatureCards />
      </section>

      {/* How It Works */}
      <FlowDiagram />

      {/* Use Cases Section */}
      <section className="py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Perfect for <span className="text-red-500">Every</span> Developer
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            From solo developers to large teams, Preflight AI adapts to your
            workflow and keeps your code quality high.
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
                Catch bugs early, learn from AI feedback, and ship with
                confidence — even without a code review team.
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
                Enforce code quality standards automatically, reduce review
                time, and prevent production incidents before they happen.
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
                  Catch Issues Before They Reach Production
                </h3>
                <p className="text-zinc-400">
                  Detect security vulnerabilities, logic errors, and runtime
                  issues at commit time — not after deployment.
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
                  Lightning Fast with Smart Caching
                </h3>
                <p className="text-zinc-400">
                  Incremental analysis means only changed files are scanned,
                  keeping your workflow fast and efficient.
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
                  AI-Powered Code Understanding
                </h3>
                <p className="text-zinc-400">
                  Groq&apos;s advanced LLM understands context across your
                  entire codebase, not just isolated files.
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
                  Multi-Language Support Out of the Box
                </h3>
                <p className="text-zinc-400">
                  Works with JavaScript, TypeScript, Python, Java, Go, C++,
                  Rust, and more — no configuration needed.
                </p>
              </div>
            </motion.div>
          </div>
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
            Ready to Ship Safer Code?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 mb-8 text-lg"
          >
            Get started with Preflight AI in under a minute. No credit card
            required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto mb-8"
          >
            <CommandBlock command="npx prefl init" />
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
