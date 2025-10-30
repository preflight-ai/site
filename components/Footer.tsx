import Link from "next/link";
import { Github, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-16 text-zinc-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-end gap-1 text-2xl font-semibold text-white mb-4">
              Prefl
              <sup className="text-lg text-red-500 font-normal">.run</sup>
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              AI-powered code analysis that catches critical issues before they reach production. Built by developers, for developers.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/preflight-ai/cli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:support@prefl.run"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <Link
                href="/donate"
                className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
                aria-label="Donate"
              >
                <Heart size={20} className="text-red-400" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/docs" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/preflight-ai/cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://console.groq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Get Groq API Key
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@prefl.run"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/preflight-ai/cli/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Report Issue
                </a>
              </li>
              <li>
                <a
                  href="https://opencollective.com/preflight-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Open Collective
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white">Prefl.run</span>. Open source and built with ❤️
          </p>
          <p className="text-zinc-600">
            Powered by <span className="text-red-500">Groq AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
