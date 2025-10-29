"use client";

import { ArrowRight, GitCommit, Sparkles, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FlowDiagram = () => {
  const steps = [
    {
      icon: <GitCommit size={24} />,
      title: "Stage Files",
      desc: "Run git add on your changes",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Run Preflight",
      desc: "npx preflight analyze",
    },
    {
      icon: <Shield size={24} />,
      title: "AI Analysis",
      desc: "Groq AI scans your code",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Safe to Commit",
      desc: "No issues found ✅",
    },
  ];

  return (
    <section className="py-24 text-white bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          How It <span className="text-red-500">Works</span>
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Preflight AI integrates seamlessly into your development workflow in
          just a few simple steps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/40 hover:bg-zinc-900 transition-colors text-center h-full">
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4 text-red-400">
                  {step.icon}
                </div>
                <div className="text-sm text-zinc-500 mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-zinc-600" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
