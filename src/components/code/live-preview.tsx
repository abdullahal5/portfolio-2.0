"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { JSX } from "react/jsx-runtime";

interface LivePreviewProps {
  code: string;
}

export default function LivePreview({ code }: LivePreviewProps) {
  const [output, setOutput] = useState<any>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [visualOutput, setVisualOutput] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const executeCode = async () => {
      setIsExecuting(true);
      setError(null);
      setLogs([]);
      setVisualOutput(null);

      try {
        // Create a safe execution environment
        const capturedLogs: string[] = [];

        // Create a custom console object
        const customConsole = {
          log: (...args: any[]) => {
            capturedLogs.push(
              args
                .map((arg) =>
                  typeof arg === "object"
                    ? JSON.stringify(arg, null, 2)
                    : String(arg),
                )
                .join(" "),
            );
          },
        };

        // Execute the code with custom console
        const wrappedCode = `
      const console = arguments[0];
      ${code}
    `;

        const result = new Function(wrappedCode)(customConsole);

        setLogs(capturedLogs);
        setOutput(result);

        // Generate visual output based on the result
        const visual = generateVisualOutput(result);
        setVisualOutput(visual);

        console.log("Execution result:", result); // Debug log
      } catch (err) {
        console.error("Execution error:", err); // Debug log
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setIsExecuting(false);
      }
    };

    const debounceTimer = setTimeout(executeCode, 500);
    return () => clearTimeout(debounceTimer);
  }, [code]);

  const generateVisualOutput = (result: any): JSX.Element | null => {
    console.log("Generating visual for:", result, typeof result); // Debug log

    if (result === null || result === undefined) {
      return <PrimitiveVisualization value={result} />;
    }

    // Handle different types of output
    if (typeof result === "object" && result !== null) {
      // Check if it's a profile-like object
      if (result.name && (result.skills || result.title)) {
        return <ProfileCard profile={result} />;
      }

      // Check if it's an array
      if (Array.isArray(result)) {
        return <ArrayVisualization array={result} />;
      }

      // Generic object visualization
      return <ObjectVisualization object={result} />;
    }

    // Handle functions
    if (typeof result === "function") {
      return <FunctionVisualization func={result} />;
    }

    // Handle primitives with visual representation
    return <PrimitiveVisualization value={result} />;
  };

  const renderValue = (value: any): string => {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (typeof value === "function") return value.toString();
    if (typeof value === "object") return JSON.stringify(value, null, 2);
    return String(value);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Execution Status */}
      <div className="border-b border-slate-700/50 p-4">
        <div className="flex items-center space-x-2">
          <motion.div
            animate={isExecuting ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              duration: 1,
              repeat: isExecuting ? Number.POSITIVE_INFINITY : 0,
              ease: "linear",
            }}
            className={`h-2 w-2 rounded-full ${isExecuting ? "bg-yellow-500" : error ? "bg-red-500" : "bg-green-500"}`}
          />
          <span className="text-sm text-gray-300">
            {isExecuting ? "Executing..." : error ? "Error" : "Ready"}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-auto p-4">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-lg border border-red-500/50 bg-red-900/30 p-4"
            >
              <h3 className="mb-2 font-semibold text-red-400">Error:</h3>
              <pre className="font-mono text-sm whitespace-pre-wrap text-red-300">
                {error}
              </pre>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {/* Visual Output - Main Feature */}
              {visualOutput ? (
                <div className="rounded-lg border border-slate-600/50 bg-gradient-to-br from-slate-900/50 to-purple-900/20 p-4 backdrop-blur-sm">
                  <h3 className="mb-4 flex items-center font-semibold text-purple-400">
                    <span className="mr-2 h-2 w-2 rounded-full bg-purple-400"></span>
                    Live Preview:
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {visualOutput}
                  </motion.div>
                </div>
              ) : (
                <div className="rounded-lg border border-slate-600/50 bg-slate-900/50 p-4">
                  <h3 className="mb-2 flex items-center font-semibold text-gray-400">
                    <span className="mr-2 h-2 w-2 rounded-full bg-gray-400"></span>
                    No Output
                  </h3>
                  <p className="text-sm text-gray-500">
                    Make sure your code returns a value or logs something to see
                    output here.
                  </p>
                </div>
              )}

              {/* Console Logs */}
              {logs.length > 0 && (
                <details
                  className="rounded-lg border border-slate-600/50 bg-slate-900/50"
                  open
                >
                  <summary className="flex cursor-pointer items-center p-4 font-semibold text-blue-400 hover:bg-slate-800/50">
                    <span className="mr-2 h-2 w-2 rounded-full bg-blue-400"></span>
                    Console Output ({logs.length} logs)
                  </summary>
                  <div className="space-y-2 p-4 pt-0">
                    {logs.map((log, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded border-l-2 border-blue-500 bg-slate-800/50 p-2 font-mono text-sm text-gray-300"
                      >
                        <pre className="whitespace-pre-wrap">{log}</pre>
                      </motion.div>
                    ))}
                  </div>
                </details>
              )}

              {/* Raw Output for debugging */}
              {output !== undefined && (
                <details className="rounded-lg border border-slate-600/50 bg-slate-900/50">
                  <summary className="flex cursor-pointer items-center p-4 font-semibold text-green-400 hover:bg-slate-800/50">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
                    Raw Output (Debug)
                  </summary>
                  <div className="p-4 pt-0">
                    <pre className="rounded border-l-2 border-green-500 bg-slate-800/50 p-3 font-mono text-sm whitespace-pre-wrap text-gray-300">
                      {typeof output === "object"
                        ? JSON.stringify(output, null, 2)
                        : String(output)}
                    </pre>
                  </div>
                </details>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Visual Components for different data types

function ProfileCard({ profile }: { profile: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 backdrop-blur-sm"
    >
      <div className="mb-4 flex items-center space-x-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-xl font-bold text-white">
          {profile.name?.charAt(0) || "U"}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            {profile.name || "Unknown"}
          </h3>
          <p className="text-sm text-gray-300">
            {profile.title || "Developer"}
          </p>
        </div>
      </div>

      {profile.skills && (
        <div className="mb-4">
          <h4 className="mb-2 font-semibold text-purple-300">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill: string, index: number) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-sm text-purple-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 text-sm">
        {profile.yearsOfExperience && (
          <div className="rounded-lg bg-slate-800/50 p-3">
            <div className="text-gray-400">Experience</div>
            <div className="font-semibold text-white">
              {profile.yearsOfExperience} years
            </div>
          </div>
        )}
        {typeof profile.hireable === "function" && (
          <div className="rounded-lg bg-slate-800/50 p-3">
            <div className="text-gray-400">Hireable</div>
            <div
              className={`font-semibold ${profile.hireable() ? "text-green-400" : "text-red-400"}`}
            >
              {profile.hireable() ? "Yes" : "No"}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ArrayVisualization({ array }: { array: any[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3"
    >
      <div className="text-sm text-gray-300">
        Array with {array.length} items:
      </div>
      <div className="grid gap-2">
        {array.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3 rounded-lg border border-slate-600/30 bg-slate-800/50 p-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/20 font-mono text-sm text-blue-300">
              {index}
            </div>
            <div className="flex-1 font-mono text-sm text-gray-200">
              {typeof item === "object" ? JSON.stringify(item) : String(item)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ObjectVisualization({ object }: { object: any }) {
  const entries = Object.entries(object);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-3"
    >
      <div className="text-sm text-gray-300">
        Object with {entries.length} properties:
      </div>
      <div className="grid gap-2">
        {entries.map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-lg border border-slate-600/30 bg-slate-800/50 p-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-green-300">{key}:</span>
              <span className="ml-2 font-mono text-sm text-gray-200">
                {typeof value === "function"
                  ? "𝑓()"
                  : typeof value === "object"
                    ? JSON.stringify(value)
                    : String(value)}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FunctionVisualization({ func }: { func: Function }) {
  const [result, setResult] = useState<any>(null);
  const [hasExecuted, setHasExecuted] = useState(false);

  const executeFunction = () => {
    try {
      const output = func();
      setResult(output);
      setHasExecuted(true);
    } catch (err) {
      setResult(`Error: ${err}`);
      setHasExecuted(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-lg border border-slate-600/30 bg-slate-800/50 p-4"
    >
      <div className="mb-3 text-sm text-yellow-300">Interactive Function:</div>
      <button
        onClick={executeFunction}
        className="transform rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white transition-all hover:scale-105 hover:from-purple-600 hover:to-pink-600"
      >
        Execute Function
      </button>

      {hasExecuted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 rounded border-l-2 border-yellow-500 bg-slate-900/50 p-3"
        >
          <div className="mb-1 text-xs text-yellow-300">Result:</div>
          <div className="font-mono text-sm text-gray-200">
            {typeof result === "object"
              ? JSON.stringify(result, null, 2)
              : String(result)}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function PrimitiveVisualization({ value }: { value: any }) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "string":
        return "text-green-400 border-green-500/30 bg-green-500/10";
      case "number":
        return "text-blue-400 border-blue-500/30 bg-blue-500/10";
      case "boolean":
        return "text-yellow-400 border-yellow-500/30 bg-yellow-500/10";
      default:
        return "text-gray-400 border-gray-500/30 bg-gray-500/10";
    }
  };

  const type = typeof value;
  const colorClass = getTypeColor(type);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-lg border p-4 ${colorClass}`}
    >
      <div className="mb-2 text-xs opacity-70">{type.toUpperCase()}</div>
      <div className="font-mono text-2xl font-bold">
        {type === "string" ? `"${value}"` : String(value)}
      </div>
    </motion.div>
  );
}
