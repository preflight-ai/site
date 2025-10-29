"use client";

import { CommandBlock } from "@/components/CommandBlock";
import { motion } from "framer-motion";

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-zinc-950 to-zinc-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Getting Started with Preflight AI
        </motion.h1>

        <p className="text-zinc-400 leading-relaxed text-lg">
          Preflight AI is an AI-powered pre-push analyzer that scans your
          project for documentation, testing, runtime, and accessibility issues
          — directly from your terminal. It&apos;s powered by Groq&apos;s
          real-time intelligence and works with JavaScript, TypeScript, Python,
          Java, Go, and more.
        </p>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">🔍</span>
              <div>
                <strong className="text-white">Full-project analysis</strong> —
                Understands imports, dependencies, and context across your
                entire codebase.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">⚡</span>
              <div>
                <strong className="text-white">Incremental scanning</strong> —
                Analyzes only changed files using intelligent caching.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">🧠</span>
              <div>
                <strong className="text-white">AI-assisted feedback</strong> —
                Get smart suggestions powered by Groq&apos;s LLM.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">🔒</span>
              <div>
                <strong className="text-white">Pre-push hook support</strong> —
                Automatically blocks pushes if critical issues are found.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">🧩</span>
              <div>
                <strong className="text-white">Cross-language ready</strong> —
                Supports JS, TS, JSX, TSX, Python, Java, Go, PHP, HTML, CSS, C,
                C++, Rust, Ruby, and more.
              </div>
            </li>
          </ul>
        </section>

        {/* Prerequisites */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Prerequisites</h2>
          <p className="text-zinc-400 mb-4">
            You&apos;ll need <strong>Node.js</strong> (v18 or newer) installed
            with npm, yarn, pnpm, or bun. You&apos;ll also need a{" "}
            <strong>Groq API key</strong> — get one free at{" "}
            <a
              href="https://console.groq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              console.groq.com
            </a>
            .
          </p>
        </section>

        {/* Quick start */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <p className="text-zinc-400 mb-6">
            Run Preflight AI directly with npx (no installation required):
          </p>
          <div className="max-w-lg mb-6">
            <CommandBlock command="npx preflight-ai" />
          </div>

          <p className="text-zinc-400 mb-4">
            Or install it as a dev dependency in your project:
          </p>
          <div className="max-w-lg">
            <CommandBlock command="npm install --save-dev @preflight-ai/cli" />
          </div>

          <p className="text-zinc-500 mt-6 text-sm">
            💡 Tip: You can also use{" "}
            <code className="bg-zinc-800 px-1.5 py-0.5 rounded">
              yarn, pnpm, or bun
            </code>{" "}
            for installation.
          </p>
        </section>

        {/* Initialize */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Initialize Preflight AI
          </h2>
          <p className="text-zinc-400 mb-4">
            Run the initialization command to set up Preflight in your project:
          </p>

          <div className="max-w-lg mb-6">
            <CommandBlock command="npx preflight init" />
          </div>

          <p className="text-zinc-400 mb-4">This interactive setup will:</p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4">
            <li>Prompt you to enter your Groq API key</li>
            <li>
              Create a{" "}
              <code className="bg-zinc-800 px-1.5 py-0.5 rounded">.env</code>{" "}
              file with your API key
            </li>
            <li>
              Create a{" "}
              <code className="bg-zinc-800 px-1.5 py-0.5 rounded">
                preflight.json
              </code>{" "}
              config file
            </li>
            <li>
              Add{" "}
              <code className="bg-zinc-800 px-1.5 py-0.5 rounded">.env</code> to
              your .gitignore
            </li>
            <li>Set up pre-commit Git hooks automatically</li>
          </ul>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
            <pre>
              {`# Example .env file (created automatically)
GROQ_API_KEY=your_api_key_here`}
            </pre>
          </div>
        </section>

        {/* Configuration */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Configuration</h2>
          <p className="text-zinc-400 mb-4">
            The{" "}
            <code className="bg-zinc-800 px-1.5 py-0.5 rounded">
              preflight.json
            </code>{" "}
            file controls which files to analyze and ignore:
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
            <pre>
              {`{
  "ignore": [
    "node_modules",
    "dist",
    "build",
    ".next"
  ]
}`}
            </pre>
          </div>

          <p className="text-zinc-500 mt-6 text-sm">
            💡 Add any directories or files you want to exclude from analysis to
            the{" "}
            <code className="bg-zinc-800 px-1.5 py-0.5 rounded">ignore</code>{" "}
            array.
          </p>
        </section>

        {/* Running Analysis */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Analyze Your Code</h2>
          <p className="text-zinc-400 mb-4">
            Run Preflight to analyze your staged files before committing:
          </p>

          <div className="max-w-lg mb-6">
            <CommandBlock command="npx preflight analyze" />
          </div>

          <p className="text-zinc-400 mb-4">Preflight will:</p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              Detect all staged files (or fall back to src/ if none staged)
            </li>
            <li>Collect related files through import analysis</li>
            <li>Extract only the changed code from git diff</li>
            <li>Send context to Groq AI for deep analysis</li>
            <li>
              Report critical issues in a structured format with file, problem,
              impact, and suggestions
            </li>
            <li>
              Block the commit/push if critical issues, vulnerabilities, or
              security risks are detected
            </li>
          </ul>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm mt-6 overflow-x-auto">
            <pre className="text-zinc-300">
              {`🔍 Analyzing staged files...
🗂️ Staged files: 3
🧠 Contacting Preflight AI (5 file(s))...

📋 AI Analysis Result:

──────────────────────────────────────────────
📄 file: src/auth/login.ts
❌ problem: Hardcoded API credentials
💥 impact: Security vulnerability - credentials exposed
💡 suggestion: Move to environment variables
──────────────────────────────────────────────

❌ Critical issue(s) found. Commit aborted.`}
            </pre>
          </div>
        </section>

        {/* Available Commands */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Available Commands</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <code className="text-blue-400 font-semibold">
                preflight init
              </code>
              <p className="text-zinc-400 text-sm mt-2">
                Initialize Preflight AI in your project. Sets up configuration,
                API key, and Git hooks.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <code className="text-green-400 font-semibold">
                preflight analyze
              </code>
              <p className="text-zinc-400 text-sm mt-2">
                Analyze staged files for issues. Runs automatically on
                pre-commit if hooks are installed.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        {/* <section>
          <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
          <div className="space-y-4 text-zinc-400">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <strong className="text-white">File Detection</strong> —
                Preflight detects all staged files in your Git repository. If no
                files are staged, it falls back to analyzing your{" "}
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded">src/</code>{" "}
                directory.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <strong className="text-white">Dependency Graph</strong> — It
                automatically follows import statements to collect related files
                and understand the full context of your changes.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <strong className="text-white">Smart Diff</strong> — Only the
                changed lines (git diff) are extracted and sent for analysis,
                keeping the process fast and efficient.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4️⃣</span>
              <div>
                <strong className="text-white">AI Analysis</strong> — Your code
                is analyzed by Groq&apos;s advanced LLM for logic errors,
                security vulnerabilities, runtime issues, and code quality
                problems.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5️⃣</span>
              <div>
                <strong className="text-white">Structured Feedback</strong> —
                Issues are reported with the file name, problem description,
                impact assessment, and actionable suggestions.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">6️⃣</span>
              <div>
                <strong className="text-white">Automatic Protection</strong> —
                If critical issues are found, the commit/push is automatically
                blocked to prevent bugs from reaching production.
              </div>
            </div>
          </div>
        </section> */}

        {/* Troubleshooting */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Troubleshooting</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Missing Groq API key error
              </h3>
              <p className="text-zinc-400 mb-2">
                Make sure you&apos;ve run{" "}
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded">
                  preflight init
                </code>{" "}
                and entered your API key. The key should be stored in a{" "}
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded">.env</code>{" "}
                file at your project root.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                No preflight.json found
              </h3>
              <p className="text-zinc-400 mb-2">
                Run{" "}
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded">
                  preflight init
                </code>{" "}
                to create the configuration file. Make sure you&apos;re running
                the command from your project root directory.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                No files to analyze
              </h3>
              <p className="text-zinc-400 mb-2">
                Stage some files with{" "}
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded">
                  git add
                </code>{" "}
                before running analysis, or make sure you have a{" "}
                <code className="bg-zinc-800 px-1.5 py-0.5 rounded">src/</code>{" "}
                directory in your project.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Next Steps</h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>
              Get your free Groq API key at{" "}
              <a
                href="https://console.groq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                console.groq.com
              </a>
            </li>
            <li>Star the project on GitHub to support development</li>
            <li>
              Contribute to the project or report issues on{" "}
              <a
                href="https://github.com/preflight-ai/cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              Share Preflight AI with your team and improve code quality
              together
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
