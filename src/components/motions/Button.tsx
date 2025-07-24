"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Layers, LayoutGrid, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Button = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* <div
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
        className="flex h-screen w-full items-center justify-center bg-neutral-950"
      >
        <motion.button
          whileHover={{
            rotateX: 20,
            rotateY: 20,
            y: -10,
            boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          }}
          whileTap={{
            y: 0,
          }}
          style={{
            translateZ: 100,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="group relative rounded-lg bg-black px-12 py-4 text-neutral-500 shadow-[0px_1px_4px_0px_rbga(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,2555,0.1)_inset] [perspective::1000px] [transform-style:perserve-3d]"
        >
          <span className="font-semibold transition-colors duration-300 group-hover:text-cyan-500">
            Subscribe
          </span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <span className="absolute inset-x-0 -bottom-px mx-auto h-[4px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
        </motion.button>
      </div> */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex h-[26rem] min-h-[26rem] w-72 flex-col rounded-xl bg-white p-6 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_60px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
          >
            <h2 className="text-[11px] font-bold text-neutral-800">
              Portfolio UI Kit
            </h2>
            <p className="mt-2 text-[10px] leading-relaxed text-neutral-600">
              A refined set of components designed to elevate your personal or
              client portfolio interface — fast, responsive, and elegant.
            </p>

            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_60px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
              >
                <Image
                  width={20}
                  height={20}
                  src="https://ui.aceternity.com/logo-dark.png"
                  alt="Logo"
                />
                Aceternity
                <X className="h-3 w-3 text-neutral-400" />
              </button>
            </div>

            <div className="relative mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 bg-gray-100">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="absolute inset-0 h-full w-full divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white"
              >
                {[
                  {
                    icon: <LayoutGrid className="h-4 w-4 text-neutral-600" />,
                    title: "Grid Layouts",
                    desc: "Organize content with flexible grids.",
                  },
                  {
                    icon: <Sparkles className="h-4 w-4 text-neutral-600" />,
                    title: "Interactive Effects",
                    desc: "Add flair with hover and animation support.",
                  },
                  {
                    icon: <Code2 className="h-4 w-4 text-neutral-600" />,
                    title: "Code Friendly",
                    desc: "Built with developers in mind.",
                  },
                  {
                    icon: <Layers className="h-4 w-4 text-neutral-600" />,
                    title: "Reusable Blocks",
                    desc: "Modular components for every section.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2 p-4">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[8px] font-bold text-neutral-700">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[8px] text-neutral-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Button;
