"use client";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";

export const TerminalDemo = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold pb-10">
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
            <span className="text-indigo-400">$</span> git commit -m add{" "}
            {'"feat: add new feature"'}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-green-400"
          >
            ✨ Analysis complete! Found 1 issue(s){" "}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className=" rounded-lg px-3 py-2 mt-3"
          >
            <p className="text-red-400">❌ CRITICAL ISSUES {"(Must Fix)"}</p>
            <p className="text-zinc-400 text-xs mt-1">
              File:{" "}
              <span className="text-zinc-400 text-sm">File: src/App.tsx</span>
            </p>
            <p className="text-red-400 text-sm py-3">
              Issue: Empty useEffect with no dependency array creates an
              infinite loop that runs on every render, causing performance
              degradation and potential memory issues
            </p>
            <p className="text-green-400 text-sm py-3">
              Fix: Remove the empty useEffect or add proper dependencies:
              {
                "useEffect(() => { /* your effect logic */ }, [/* dependencies */])"
              }
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-red-400 mt-4"
          >
            🛑 Commit blocked due to critical issues. Please fix them first.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
