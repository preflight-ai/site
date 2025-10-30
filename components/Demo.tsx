"use client";

import { motion } from "framer-motion";

export const TerminalDemo = () => {
  return (
    <section className="py-24 text-white bg-zinc-900/30">
      <div className="px-6">
        <h2 className="text-3xl font-bold pb-10 text-center">
          See It <span className="text-red-500">In Action</span>
        </h2>
        <div className="relative w-full max-w-3xl pt-0 mx-auto rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg ">
          {/* Terminal Header */}

          <div className="flex items-center gap-2 bg-zinc-800/70 px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Terminal Body */}
          <div className="font-mono text-sm text-zinc-200 bg-zinc-950 px-4 py-5 space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-indigo-400 text-sm">$</span> git commit -m
              add {'"feat: add new feature"'}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-green-400 text-sm"
            >
              ✨ Analysis complete! Found 1 issue(s){" "}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className=" rounded-lg px-3 py-2 mt-3"
            >
              <p className="text-red-400 text-sm">
                CRITICAL ISSUES {"(Must Fix)"}
              </p>
              <p className="text-zinc-400 text-sm py-3 text-left">
                File: src/App.tsx
              </p>
              <p className="text-red-400 text-sm py-3 text-left">
                Issue: Memory leak: setInterval is created but never cleaned up,
                causing the interval to continue running even after component
                unmount
              </p>
              <p className="text-green-400 text-sm py-3 text-left">
                Fix: Return a cleanup function from useEffect to clear the
                interval:
                <br />
                {"return () => clearInterval(intervalId);"}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-red-400 mt-4 text-left"
            >
              ❌ Commit blocked due to critical issues. Please fix them first.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
