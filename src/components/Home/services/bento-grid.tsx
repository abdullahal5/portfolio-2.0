/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";

import { techStack } from "@/data";
import { MagicButton } from "@/components/ui/magicButton";
import { GridGlobe } from "@/components/ui/Grid-Globe";
import { motion, useInView } from "framer-motion";
import { Code } from "lucide-react";

// const BackgroundGradientAnimation = ({
//   gradientBackgroundStart = "rgb(108, 0, 162)",
//   gradientBackgroundEnd = "rgb(0, 17, 82)",
//   firstColor = "18, 113, 255",
//   secondColor = "221, 74, 255",
//   thirdColor = "100, 220, 255",
//   fourthColor = "200, 50, 50",
//   fifthColor = "180, 180, 50",
//   pointerColor = "140, 100, 255",
//   size = "80%",
//   blendingValue = "hard-light",
//   children,
//   className,
//   interactive = true,
//   containerClassName,
// }: {
//   gradientBackgroundStart?: string;
//   gradientBackgroundEnd?: string;
//   firstColor?: string;
//   secondColor?: string;
//   thirdColor?: string;
//   fourthColor?: string;
//   fifthColor?: string;
//   pointerColor?: string;
//   size?: string;
//   blendingValue?: string;
//   children?: React.ReactNode;
//   className?: string;
//   interactive?: boolean;
//   containerClassName?: string;
// }) => {
//   const interactiveRef = useRef<HTMLDivElement>(null);

//   const [curX, setCurX] = useState(0);
//   const [curY, setCurY] = useState(0);
//   const [tgX, setTgX] = useState(0);
//   const [tgY, setTgY] = useState(0);
//   useEffect(() => {
//     document.body.style.setProperty(
//       "--gradient-background-start",
//       gradientBackgroundStart,
//     );
//     document.body.style.setProperty(
//       "--gradient-background-end",
//       gradientBackgroundEnd,
//     );
//     document.body.style.setProperty("--first-color", firstColor);
//     document.body.style.setProperty("--second-color", secondColor);
//     document.body.style.setProperty("--third-color", thirdColor);
//     document.body.style.setProperty("--fourth-color", fourthColor);
//     document.body.style.setProperty("--fifth-color", fifthColor);
//     document.body.style.setProperty("--pointer-color", pointerColor);
//     document.body.style.setProperty("--size", size);
//     document.body.style.setProperty("--blending-value", blendingValue);
//   }, [
//     blendingValue,
//     fifthColor,
//     firstColor,
//     fourthColor,
//     gradientBackgroundEnd,
//     gradientBackgroundStart,
//     pointerColor,
//     secondColor,
//     size,
//     thirdColor,
//   ]);

//   useEffect(() => {
//     const move = () => {
//       if (!interactiveRef.current) {
//         return;
//       }
//       setCurX(curX + (tgX - curX) / 20);
//       setCurY(curY + (tgY - curY) / 20);
//       interactiveRef.current.style.transform = `translate(${Math.round(
//         curX,
//       )}px, ${Math.round(curY)}px)`;
//     };

//     move();
//   }, [curX, curY, tgX, tgY]);

//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (interactiveRef.current) {
//       const rect = interactiveRef.current.getBoundingClientRect();
//       setTgX(event.clientX - rect.left);
//       setTgY(event.clientY - rect.top);
//     }
//   };

//   const [isSafari, setIsSafari] = useState(false);
//   useEffect(() => {
//     setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
//   }, []);

//   return (
//     <div
//       className={cn(
//         "absolute top-0 left-0 h-full w-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
//         containerClassName,
//       )}
//     >
//       <svg className="hidden">
//         <defs>
//           <filter id="blurMe">
//             <feGaussianBlur
//               in="SourceGraphic"
//               stdDeviation="10"
//               result="blur"
//             />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
//               result="goo"
//             />
//             <feBlend in="SourceGraphic" in2="goo" />
//           </filter>
//         </defs>
//       </svg>
//       <div className={cn("", className)}>{children}</div>
//       <div
//         className={cn(
//           "gradients-container h-full w-full blur-lg",
//           isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]",
//         )}
//       >
//         <div
//           className={cn(
//             `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
//             `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
//             `[transform-origin:center_center]`,
//             `animate-first`,
//             `opacity-100`,
//           )}
//         />

//         <div
//           className={cn(
//             `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
//             `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
//             `[transform-origin:calc(50%-400px)]`,
//             `animate-second`,
//             `opacity-100`,
//           )}
//         />

//         <div
//           className={cn(
//             `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
//             `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
//             `[transform-origin:calc(50%+400px)]`,
//             `animate-third`,
//             `opacity-100`,
//           )}
//         />

//         <div
//           className={cn(
//             `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
//             `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
//             `[transform-origin:calc(50%-200px)]`,
//             `animate-fourth`,
//             `opacity-70`,
//           )}
//         />

//         <div
//           className={cn(
//             `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
//             `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
//             `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
//             `animate-fifth`,
//             `opacity-100`,
//           )}
//         />

//         {interactive && (
//           <div
//             ref={interactiveRef}
//             onMouseMove={handleMouseMove}
//             className={cn(
//               `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
//               `-top-1/2 -left-1/2 h-full w-full [mix-blend-mode:var(--blending-value)]`,
//               `opacity-70`,
//             )}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const codeLines = [
    "$ npm create next-app@latest",
    "$ cd my-awesome-project",
    "$ npm install framer-motion",
    "$ npm run dev",
    "> Ready on http://localhost:3000",
  ];

  const typeText = async (text: string, lineIndex: number) => {
    for (let i = 0; i <= text.length; i++) {
      if (!isHovered) break;
      setDisplayedText(text.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    if (isHovered && lineIndex < codeLines.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setCurrentLineIndex(lineIndex + 1);
    }
  };

  const handleHoverStart = () => {
    setIsHovered(true);
    setCurrentLineIndex(0);
    setDisplayedText("");
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    setCurrentLineIndex(0);
    setDisplayedText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("abdullahalfahin183@gmail.com");
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  useEffect(() => {
    if (isHovered && currentLineIndex < codeLines.length) {
      typeText(codeLines[currentLineIndex], currentLineIndex);
    }
  }, [currentLineIndex, isHovered]);

  const containerVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: (id || 1) * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      // onHoverStart={handleHoverStart}
      // onHoverEnd={handleHoverEnd}
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-300 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg dark:border-neutral-800/50 dark:bg-neutral-900/80 dark:hover:border-neutral-700",
        className,
      )}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-transparent dark:from-neutral-800/20" />

      {/* Content container */}
      <div className={cn("relative h-full", id === 6 && "flex justify-center")}>
        {/* Background image */}
        <div className="absolute h-full w-full">
          {img && (
            <Image
              width={689}
              height={541}
              src={img || "/placeholder.svg"}
              alt={img}
              className={cn(
                "object-cover object-center opacity-60 dark:opacity-40",
                imgClassName,
              )}
            />
          )}
        </div>

        {/* Spare image */}
        <div
          className={cn(
            "absolute right-0 -mb-5",
            id === 5 && "w-full opacity-60 dark:opacity-40",
          )}
        >
          {spareImg && (
            <Image
              width={208}
              height={96}
              src={spareImg || "/placeholder.svg"}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {/* Special background for item 6 */}
        {id === 6 && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20" />
        )}

        {/* Main content */}
        <div
          className={cn(
            "relative flex min-h-40 flex-col justify-between p-6 transition-all duration-300 group-hover/bento:translate-x-1 md:h-full lg:p-8",
            titleClassName,
          )}
        >
          {/* Description */}
          {description && (
            <motion.div
              className="z-10 text-sm font-medium text-neutral-600 md:text-base dark:text-neutral-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: (id || 1) * 0.1 + 0.2 }}
            >
              {description}
            </motion.div>
          )}

          {/* Title */}
          <motion.div
            className={`z-10 max-w-96 text-lg leading-tight font-bold text-neutral-900 lg:text-2xl dark:text-neutral-100`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: (id || 1) * 0.1 + 0.3 }}
          >
            {title}
          </motion.div>

          {/* Globe for item 2 */}
          {id === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.5 }}
            >
              <GridGlobe />
            </motion.div>
          )}

          {/* Tech stack for item 3 */}
          {id === 3 && (
            <motion.div
              className="absolute -right-3 flex w-fit gap-2 lg:-right-2 lg:gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.6 }}
            >
              {/* Stack 1 - Scrolls Up */}
              <div className="relative flex h-52 flex-col gap-2 overflow-hidden lg:gap-4">
                <motion.div
                  className="flex flex-col gap-2 lg:gap-4"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...techStack.stack1, ...techStack.stack1].map(
                    (item, index) => (
                      <span
                        key={`up-${item}-${index}`}
                        className="rounded-lg bg-neutral-800 px-3 py-2 text-center text-xs text-white shadow-sm lg:px-3 lg:py-3 lg:text-sm dark:bg-neutral-700"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </motion.div>
              </div>

              {/* Stack 2 - Scrolls Down */}
              <div className="relative flex h-52 flex-col gap-2 overflow-hidden lg:gap-4">
                <motion.div
                  className="flex flex-col gap-2 lg:gap-4"
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {[...techStack.stack2, ...techStack.stack2].map(
                    (item, index) => (
                      <span
                        key={`down-${item}-${index}`}
                        className="rounded-lg bg-neutral-800 px-3 py-2 text-center text-xs text-white shadow-sm lg:px-3 lg:py-3 lg:text-sm dark:bg-neutral-700"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}

          {id === 5 && (
            <>
              <div className="absolute -right-10 -bottom-20 h-[300px] w-[500px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  {/* Blurred Background Content */}
                  <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-sm shadow-lg backdrop-blur-xl">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0.7 }}
                      transition={{ duration: 0.3 }}
                      className="text-green-400"
                    >
                      {/* Previous lines */}
                      {codeLines
                        .slice(0, currentLineIndex)
                        .map((line, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="mb-1"
                          >
                            {line}
                          </motion.div>
                        ))}

                      {/* Current typing line */}
                      {isHovered && currentLineIndex < codeLines.length && (
                        <div className="flex items-center">
                          <span>{displayedText}</span>
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{
                              duration: 0.8,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                            className="ml-1 inline-block h-4 w-2 bg-green-400"
                          />
                        </div>
                      )}

                      {/* Default state when not hovered */}
                      {!isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center text-gray-400"
                        >
                          <Code className="mr-2 h-4 w-4" />
                          Hover to see magic happen...
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </>
          )}

          {/* Email copy for item 6 */}
          {id === 6 && (
            <motion.div
              className="group relative mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <button
                tabIndex={-1}
                className="pointer-events-none absolute right-0 -bottom-5 cursor-default"
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </button>
              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-neutral-800 hover:!bg-neutral-700 dark:!bg-neutral-700 dark:hover:!bg-neutral-600"
                handleClick={handleCopy}
                asChild
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
