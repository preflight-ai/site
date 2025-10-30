"use client";

import { CommandBlock } from "@/components/CommandBlock";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("installation");

  const sections = [
    { id: "installation", title: "Installation" },
    { id: "quick-start", title: "Quick Start" },
    { id: "commands", title: "Commands" },
    { id: "configuration", title: "Configuration" },
    { id: "git-hooks", title: "Git Hook Integration" },
    { id: "use-cases", title: "Use Cases" },
    { id: "env-vars", title: "Environment Variables" },
    { id: "examples", title: "Examples" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-20 self-start">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
            <h3 className="font-semibold mb-4 text-sm text-zinc-400">
              ON THIS PAGE
            </h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={`block px-3 py-2 text-sm rounded transition-colors ${
                    activeSection === section.id
                      ? "bg-red-500/20 text-red-400 font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Preflight AI <span className="text-red-500">Documentation</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              AI-powered code review tool that catches bugs before they reach
              production. Powered by Groq's real-time intelligence.
            </p>
          </motion.div>

          {/* Installation */}
          <section id="installation">
            <h2 className="text-3xl font-bold mb-6">📦 Installation</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-200">
                  Global Installation (Recommended)
                </h3>
                <CommandBlock command="npm install -g @preflight-ai/cli@latest" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-200">
                  Project-Specific Installation
                </h3>
                <CommandBlock command="npm install --save-dev @preflight-ai/cli" />
              </div>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quick-start">
            <h2 className="text-3xl font-bold mb-6">🚀 Quick Start</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">1️⃣</span>
                  Initialize Prefl in Your Project
                </h3>
                <CommandBlock command="prefl init" />
                <p className="text-zinc-400 mt-4">This will:</p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2 mt-2">
                  <li>Create .env file with your Groq API key</li>
                  <li>Generate prefl.json configuration</li>
                  <li>Install pre-commit Git hook automatically</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">2️⃣</span>
                  Run Your First Analysis
                </h3>
                <div className="space-y-3">
                  <CommandBlock command="prefl analyze --staged" />
                  <p className="text-zinc-500 text-sm">
                    Analyze staged files (default)
                  </p>
                  <CommandBlock command="prefl analyze --all" />
                  <p className="text-zinc-500 text-sm">Analyze all files</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">3️⃣</span>
                  Start Committing with Confidence
                </h3>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                  <pre className="text-sm text-zinc-300">
{`git add .
git commit -m "feat: add new feature"
# ✨ Prefl automatically runs before commit!`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Commands */}
          <section id="commands">
            <h2 className="text-3xl font-bold mb-6">⚡ Commands</h2>

            <div className="space-y-8">
              {/* prefl init */}
              <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  prefl init
                </h3>
                <p className="text-zinc-400 mb-4">
                  Initialize Prefl in your project
                </p>
                <CommandBlock command="prefl init" />
              </div>

              {/* prefl analyze */}
              <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  prefl analyze [options]
                </h3>
                <p className="text-zinc-400 mb-4">
                  Analyze code changes for issues
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-2 text-zinc-300">
                          Option
                        </th>
                        <th className="text-left py-2 text-zinc-300">
                          Description
                        </th>
                        <th className="text-left py-2 text-zinc-300">
                          Default
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-zinc-400">
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 font-mono text-xs">--staged</td>
                        <td className="py-2">Analyze only staged files</td>
                        <td className="py-2">true</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 font-mono text-xs">--all</td>
                        <td className="py-2">Analyze all project files</td>
                        <td className="py-2">false</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 font-mono text-xs">
                          --output &lt;file&gt;
                        </td>
                        <td className="py-2">Save results to file</td>
                        <td className="py-2">-</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 font-mono text-xs">--full</td>
                        <td className="py-2">Full project scan + report</td>
                        <td className="py-2">-</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-2 font-mono text-xs">
                          --format &lt;type&gt;
                        </td>
                        <td className="py-2">pretty or json</td>
                        <td className="py-2">pretty</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono text-xs">--auto-fix</td>
                        <td className="py-2">Apply safe fixes automatically</td>
                        <td className="py-2">false</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-zinc-400 text-sm font-semibold">
                    Examples:
                  </p>
                  <div className="space-y-2">
                    <CommandBlock command="prefl analyze --staged" />
                    <CommandBlock command="prefl analyze --all --output report.txt" />
                    <CommandBlock command="prefl analyze --format json" />
                  </div>
                </div>
              </div>

              {/* prefl fix */}
              <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  prefl fix [options]
                </h3>
                <p className="text-zinc-400 mb-4">
                  Generate AI-powered fix suggestions
                </p>

                <div className="space-y-2">
                  <CommandBlock command="prefl fix --dry-run" />
                  <p className="text-zinc-500 text-sm">
                    Preview fixes without applying
                  </p>
                  <CommandBlock command="prefl fix --apply" />
                  <p className="text-zinc-500 text-sm">
                    Auto-apply generated fixes
                  </p>
                </div>
              </div>

              {/* prefl hook */}
              <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  prefl hook [command]
                </h3>
                <p className="text-zinc-400 mb-4">Manage Git pre-commit hook</p>

                <div className="space-y-2">
                  <CommandBlock command="prefl hook install" />
                  <p className="text-zinc-500 text-sm">Install hook</p>
                  <CommandBlock command="prefl hook uninstall" />
                  <p className="text-zinc-500 text-sm">Remove hook</p>
                </div>
              </div>
            </div>
          </section>

          {/* Configuration */}
          <section id="configuration">
            <h2 className="text-3xl font-bold mb-6">⚙️ Configuration</h2>

            <p className="text-zinc-400 mb-4">
              Edit <code className="bg-zinc-800 px-2 py-1 rounded">prefl.json</code> in your project root:
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-zinc-300">
{`{
  "ignore": {
    "globs": [
      "**/node_modules/**",
      "**/dist/**",
      "**/*.test.js"
    ]
  },
  "review": {
    "showSeverities": ["critical", "warning"],
    "blockSeverities": ["critical"]
  }
}`}
              </pre>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                  ignore.globs
                </h3>
                <p className="text-zinc-400 text-sm">
                  Array of glob patterns to exclude from analysis
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                  review.blockSeverities
                </h3>
                <p className="text-zinc-400 text-sm">
                  Which severity levels should block commits:
                  <code className="bg-zinc-800 px-2 py-1 rounded ml-2">
                    ["critical"]
                  </code>
                  ,
                  <code className="bg-zinc-800 px-2 py-1 rounded ml-2">
                    ["critical", "warning"]
                  </code>
                  , or
                  <code className="bg-zinc-800 px-2 py-1 rounded ml-2">
                    []
                  </code>
                </p>
              </div>
            </div>
          </section>

          {/* Git Hooks */}
          <section id="git-hooks">
            <h2 className="text-3xl font-bold mb-6">🪝 Git Hook Integration</h2>

            <p className="text-zinc-400 mb-6">
              Prefl automatically runs before every commit to catch issues early.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Automatic Installation
                </h3>
                <p className="text-zinc-400 mb-3">
                  The pre-commit hook is installed automatically when you run:
                </p>
                <CommandBlock command="prefl init" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">How It Works</h3>
                <ol className="list-decimal list-inside text-zinc-400 space-y-2">
                  <li>You stage files: <code className="bg-zinc-800 px-2 py-1 rounded">git add .</code></li>
                  <li>You attempt to commit: <code className="bg-zinc-800 px-2 py-1 rounded">git commit -m "message"</code></li>
                  <li>Prefl analyzes only staged files</li>
                  <li>If critical issues → commit is blocked ❌</li>
                  <li>If no critical issues → commit proceeds ✅</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Disable Hook Temporarily
                </h3>
                <CommandBlock command="git commit --no-verify -m 'emergency fix'" />
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases">
            <h2 className="text-3xl font-bold mb-6">🎯 Use Cases</h2>

            <div className="grid gap-6">
              <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  1. Local Development
                </h3>
                <p className="text-zinc-400 mb-4">
                  Catch issues while coding:
                </p>
                <div className="space-y-2">
                  <CommandBlock command="prefl analyze" />
                  <CommandBlock command="prefl analyze --auto-fix" />
                </div>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  2. CI/CD Pipeline
                </h3>
                <p className="text-zinc-400 mb-4">
                  Integrate into your CI workflow:
                </p>
                <div className="bg-zinc-950 border border-zinc-800 rounded p-4 overflow-x-auto">
                  <pre className="text-xs text-zinc-300">
{`name: Code Review
on: [push, pull_request]

jobs:
  prefl:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install -g @preflight-ai/cli
      - run: prefl analyze --all --format json
        env:
          GROQ_API_KEY: \${{ secrets.GROQ_API_KEY }}`}
                  </pre>
                </div>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  3. Team Code Reviews
                </h3>
                <p className="text-zinc-400 mb-4">
                  Generate detailed reports for team discussions:
                </p>
                <CommandBlock command="prefl analyze --full" />
                <p className="text-zinc-500 text-sm mt-2">
                  Creates <code className="bg-zinc-800 px-2 py-1 rounded">prefl-report.md</code>
                </p>
              </div>
            </div>
          </section>

          {/* Environment Variables */}
          <section id="env-vars">
            <h2 className="text-3xl font-bold mb-6">🔐 Environment Variables</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-400">
                  Required
                </h3>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                  <code className="text-green-400">GROQ_API_KEY</code>
                  <p className="text-zinc-400 text-sm mt-2">
                    Your Groq API key. Get one free at{" "}
                    <a
                      href="https://console.groq.com"
                      target="_blank"
                      className="text-blue-400 hover:underline"
                    >
                      console.groq.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-zinc-300">
                  Optional
                </h3>
                <div className="space-y-3">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                    <code className="text-yellow-400">PREFL_MODEL</code>
                    <p className="text-zinc-400 text-sm mt-1">
                      Override the default AI model
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">
                      Default: <code>llama-3.3-70b-versatile</code>
                    </p>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                    <code className="text-yellow-400">PREFL_MAX_CONTEXT_FILES</code>
                    <p className="text-zinc-400 text-sm mt-1">
                      Maximum number of context files to analyze
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">Default: 5</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples">
            <h2 className="text-3xl font-bold mb-6">💡 Examples</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Example 1: First-Time Setup
                </h3>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                  <pre className="text-sm text-zinc-300">
{`# Install globally
npm install -g @preflight-ai/cli

# Navigate to your project
cd my-awesome-project

# Initialize
prefl init
# Enter your Groq API key when prompted

# Done! Now commits are automatically reviewed
git add .
git commit -m "feat: new feature"`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Example 2: Fix Issues Automatically
                </h3>
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
                  <pre className="text-sm text-zinc-300">
{`# Preview fixes
prefl fix --dry-run

# Apply safe fixes
prefl fix --apply

# Verify changes
git diff`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-3xl font-bold mb-6">❓ FAQ</h2>

            <div className="space-y-4">
              <details className="group border border-zinc-800 rounded-lg p-6 bg-zinc-900/40 cursor-pointer">
                <summary className="font-semibold list-none flex items-center justify-between">
                  What languages are supported?
                  <span className="text-red-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-zinc-400 text-sm">
                  Prefl supports <strong>all programming languages</strong>,
                  including JavaScript, TypeScript, Python, Java, Go, C/C++,
                  PHP, Ruby, Rust, and more. No configuration needed!
                </p>
              </details>

              <details className="group border border-zinc-800 rounded-lg p-6 bg-zinc-900/40 cursor-pointer">
                <summary className="font-semibold list-none flex items-center justify-between">
                  How is this different from ESLint?
                  <span className="text-red-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 text-zinc-400 text-sm space-y-2">
                  <p>
                    ESLint uses static rules. Prefl uses AI to understand your
                    code's context, logic, and business rules.
                  </p>
                  <p>
                    It catches <strong>race conditions, memory leaks, and production
                    bugs</strong> that pass code review — issues that rule-based tools
                    can't detect.
                  </p>
                  <p className="text-green-400">
                    Best Practice: Use both! ESLint for syntax/style, Prefl for
                    semantic issues.
                  </p>
                </div>
              </details>

              <details className="group border border-zinc-800 rounded-lg p-6 bg-zinc-900/40 cursor-pointer">
                <summary className="font-semibold list-none flex items-center justify-between">
                  Is my code sent to external servers?
                  <span className="text-red-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-zinc-400 text-sm">
                  Only changed files are sent to Groq's API for analysis. Your
                  code is not stored, trained on, or shared. Groq is SOC2
                  compliant and enterprise-ready.
                </p>
              </details>

              <details className="group border border-zinc-800 rounded-lg p-6 bg-zinc-900/40 cursor-pointer">
                <summary className="font-semibold list-none flex items-center justify-between">
                  How much does Groq API cost?
                  <span className="text-red-500 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-zinc-400 text-sm">
                  Groq offers a <strong>generous free tier</strong> suitable for
                  most developers. Check pricing at{" "}
                  <a
                    href="https://groq.com/pricing"
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    groq.com/pricing
                  </a>
                </p>
              </details>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="text-red-500 hover:text-red-400 underline"
              >
                View Full FAQ →
              </Link>
            </div>
          </section>

          {/* Support */}
          <section className="border-t border-zinc-800 pt-12">
            <h2 className="text-2xl font-bold mb-6">💬 Support</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="https://prefl.run"
                target="_blank"
                className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900 transition-colors"
              >
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-semibold mb-1">Website</div>
                <div className="text-sm text-zinc-400">prefl.run</div>
              </a>
              <a
                href="https://github.com/preflight-ai/cli/issues"
                target="_blank"
                className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900 transition-colors"
              >
                <div className="text-2xl mb-2">🐛</div>
                <div className="font-semibold mb-1">Issues</div>
                <div className="text-sm text-zinc-400">GitHub Issues</div>
              </a>
              <a
                href="mailto:support@prefl.run"
                className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900 transition-colors"
              >
                <div className="text-2xl mb-2">📧</div>
                <div className="font-semibold mb-1">Email</div>
                <div className="text-sm text-zinc-400">support@prefl.run</div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
