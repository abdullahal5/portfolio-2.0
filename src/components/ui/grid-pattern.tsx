"use client";

import type React from "react";
import { useId, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
  [key: string]: unknown;
}

interface Beam {
  id: string;
  path: string;
  direction: "horizontal" | "vertical";
  delay: number;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();
  const [beams, setBeams] = useState<Beam[]>([]);
  const beamLength = 10;

  useEffect(() => {
    const containerWidth = 1200;
    const containerHeight = 800;
    const gridCols = Math.floor(containerWidth / width);
    const gridRows = Math.floor(containerHeight / height);

    const addBeam = () => {
      const isHorizontal = Math.random() > 0.5;
      const delay = 0;

      const beamId = crypto.randomUUID();
      if (isHorizontal) {
        const row = Math.floor(Math.random() * gridRows);
        const y = row * height;
        setBeams((prev) => [
          ...prev,
          {
            id: `beam-h-${beamId}`,
            path: `M0,${y} L${containerWidth},${y}`,
            direction: "horizontal",
            delay,
          },
        ]);
      } else {
        const col = Math.floor(Math.random() * gridCols);
        const x = col * width;
        setBeams((prev) => [
          ...prev,
          {
            id: `beam-v-${beamId}`,
            path: `M${x},0 L${x},${containerHeight}`,
            direction: "vertical",
            delay,
          },
        ]);
      }
    };

    const interval = setInterval(addBeam, 1000);
    return () => clearInterval(interval);
  }, [width, height]);

  const handleBeamComplete = (beamId: string) => {
    setBeams((prev) => prev.filter((b) => b.id !== beamId));
  };

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 dark:fill-white/10 dark:stroke-white/10",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>

        <linearGradient id={`${id}-beam-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>

        <filter id={`${id}-glow`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid */}
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />

      {/* Beams */}
      {beams.map((beam) => (
        <motion.path
          key={beam.id}
          d={beam.path}
          fill="none"
          stroke={`url(#${id}-beam-gradient)`}
          strokeWidth={3}
          strokeLinecap="round"
          filter={`url(#${id}-glow)`}
          initial={{ strokeDasharray: `${beamLength}, 2000`, strokeDashoffset: 2000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => handleBeamComplete(beam.id)}
        />
      ))}

      {/* Highlighted squares */}
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
