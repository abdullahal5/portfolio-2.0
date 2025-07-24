"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

export default function CodeEditor({ code, onChange }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Auto-resize textarea
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [code]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newValue = code.substring(0, start) + "  " + code.substring(end);
      onChange(newValue);

      // Set cursor position after the inserted spaces
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="relative h-full">
      <motion.textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-full w-full resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-gray-100 outline-none"
        style={{
          minHeight: "500px",
          fontFamily: "Fira Code, Consolas, Monaco, monospace",
          lineHeight: "1.6",
        }}
        spellCheck={false}
        placeholder="Write your JavaScript code here..."
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Syntax highlighting overlay would go here in a real implementation */}
      <div className="absolute top-4 right-4 text-xs text-gray-500">
        Lines: {code.split("\n").length}
      </div>
    </div>
  );
}
