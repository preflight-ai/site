"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const faqs: FAQItem[] = [
  {
    question: "What is Preflight AI?",
    answer:
      "Preflight AI is an AI-powered code analyzer that runs before you commit or push your code. It uses Groq's advanced language models to detect security vulnerabilities, logic errors, runtime issues, and code quality problems in real-time.",
  },
  {
    question: "How much does it cost?",
    answer: (
      <>
        Preflight AI CLI is completely <strong>free and open-source</strong>.
        You only need a free Groq API key to use it. Get your key at{" "}
        <a
          href="https://console.groq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          console.groq.com
        </a>
        .
      </>
    ),
  },
  {
    question: "Which programming languages are supported?",
    answer:
      "Preflight AI supports JavaScript, TypeScript, JSX, TSX, Python, Java, Go, PHP, HTML, CSS, C, C++, Rust, Ruby, and more. The AI understands most major programming languages without any special configuration.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "You can run Preflight AI with npx (no installation needed), or install it as a dev dependency in your project. It requires Node.js v18 or newer.",
  },
  {
    question: "Does it work with my existing Git workflow?",
    answer:
      "Yes! Preflight AI integrates seamlessly with Git. It can analyze staged files, run automatically via Git hooks, and works with all major Git hosting platforms (GitHub, GitLab, Bitbucket, etc.).",
  },
  {
    question: "What kind of issues does it detect?",
    answer:
      "Preflight AI detects security vulnerabilities (hardcoded keys, SQL injection, XSS), logic errors (infinite loops, race conditions), runtime issues (null pointer exceptions, type errors), code quality problems (unused variables, complex functions), and more.",
  },
  {
    question: "Is my code sent to external servers?",
    answer:
      "Yes, Preflight AI sends code snippets to Groq's API for analysis. Only changed code (from git diff) is sent, not your entire codebase. Groq has strong privacy and security practices, but if you have strict data residency requirements, please review Groq's terms of service.",
  },
  {
    question: "Can I use it in CI/CD pipelines?",
    answer:
      "Absolutely! You can integrate Preflight AI into your CI/CD workflow by adding it to your build scripts. It will analyze code and fail the build if critical issues are detected.",
  },
  {
    question: "How fast is the analysis?",
    answer:
      "Preflight AI is designed to be fast. It uses incremental analysis (only scans changed files), smart caching, and Groq's ultra-fast inference. Most analyses complete in seconds.",
  },
  {
    question: "Can I customize which files are analyzed?",
    answer: (
      <>
        Yes! You can configure ignore patterns in{" "}
        <code className="bg-zinc-800 px-1.5 py-0.5 rounded">
          preflight.json
        </code>
        . Common directories like{" "}
        <code className="bg-zinc-800 px-1.5 py-0.5 rounded">node_modules</code>
        ,{" "}
        <code className="bg-zinc-800 px-1.5 py-0.5 rounded">dist</code>, and{" "}
        <code className="bg-zinc-800 px-1.5 py-0.5 rounded">build</code> are
        typically excluded.
      </>
    ),
  },
  {
    question: "What if I disagree with the AI's feedback?",
    answer:
      "Preflight AI is a tool to assist you, not replace your judgment. If you disagree with a suggestion, you can proceed with your commit. The goal is to catch potential issues, but you always have the final say.",
  },
  {
    question: "Does it work for teams?",
    answer:
      "Yes! Preflight AI is great for teams. It helps enforce code quality standards automatically, reduces code review time, and ensures all team members catch issues early — regardless of experience level.",
  },
  {
    question: "How do I get support?",
    answer: (
      <>
        For questions or issues, email us at{" "}
        <a
          href="mailto:support@prefl.run"
          className="text-blue-400 hover:underline"
        >
          support@prefl.run
        </a>{" "}
        or open an issue on{" "}
        <a
          href="https://github.com/preflight-ai/cli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I contribute to the project?",
    answer: (
      <>
        We welcome contributions! Preflight AI is open-source. Check out our{" "}
        <a
          href="https://github.com/preflight-ai/cli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub repository
        </a>{" "}
        to report bugs, suggest features, or submit pull requests.
      </>
    ),
  },
];

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/40"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-900 transition-colors"
      >
        <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
        {isOpen ? (
          <Minus className="shrink-0 text-red-400" size={20} />
        ) : (
          <Plus className="shrink-0 text-zinc-500" size={20} />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <div className="text-zinc-400 leading-relaxed">{item.answer}</div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-zinc-950 to-zinc-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Frequently Asked <span className="text-red-500">Questions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-zinc-400 mb-16 text-center max-w-2xl mx-auto"
        >
          Everything you need to know about Preflight AI. Can&apos;t find the
          answer you&apos;re looking for? Reach out to our support team.
        </motion.p>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} item={faq} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-zinc-900/30 border border-zinc-800 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-zinc-400 mb-6">
            We&apos;re here to help! Contact us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@prefl.run"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-semibold"
            >
              Email Support
            </a>
            <Link
              href="/docs"
              className="px-6 py-3 border border-zinc-700 hover:border-zinc-600 rounded-lg transition-colors"
            >
              Read Documentation
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

