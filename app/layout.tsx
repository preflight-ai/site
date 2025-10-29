import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prefl.run — AI-Powered Code Analyzer | Catch Issues Before Commit",
    template: "%s | Prefl.run",
  },
  description:
    "AI-powered code analyzer that detects security vulnerabilities, logic errors, and code quality issues before you commit. Powered by Groq's advanced LLM. Free and open-source.",
  keywords: [
    "code analyzer",
    "AI code review",
    "Groq AI",
    "preflight",
    "code quality",
    "security scanner",
    "static analysis",
    "git hooks",
    "code linter",
    "JavaScript",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Preflight AI Team" }],
  creator: "Preflight AI",
  publisher: "Prefl.run",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prefl.run",
    title: "Prefl.run — AI-Powered Code Analyzer",
    description:
      "AI-powered code analyzer that catches critical issues before you commit. Powered by Groq AI. Free and open-source.",
    siteName: "Prefl.run",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prefl.run — AI-Powered Code Analyzer",
    description:
      "AI-powered code analyzer that catches critical issues before you commit. Powered by Groq AI.",
    creator: "@prefl_run",
  },
  alternates: {
    canonical: "https://prefl.run",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-zinc-950 text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
