"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export const CommandBlock = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl p-4 font-mono text-sm text-zinc-200">
      <span className="truncate">{command}</span>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        className="text-zinc-400 hover:text-white hover:bg-zinc-800"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-1 text-green-400" /> Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-1" /> Copy
          </>
        )}
      </Button>
    </div>
  );
};
