/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

type TechExpandProps = {
  techIdx: number;
  tech: any;
};

export const TechExpand = ({ techIdx, tech }: TechExpandProps) => {
  return (
    <motion.div
      key={techIdx}
      className="relative cursor-pointer"
      style={{
        marginLeft: techIdx === 0 ? 0 : "-8px",
        zIndex: techIdx + 1,
      }}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        rest: { zIndex: techIdx + 1 },
        hover: { zIndex: 9999 },
      }}
    >
      <motion.div
        className="flex items-center rounded-full border border-neutral-300 bg-neutral-200 text-xs shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-800"
        variants={{
          rest: { width: 32 },
          hover: { width: "auto" },
        }}
        initial="rest"
        animate="rest"
        whileHover="hover"
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center">
          <span className="text-sm font-medium" style={{ color: tech.color }}>
            {<tech.icon />}
          </span>
        </div>

        <motion.span
          className="overflow-hidden pr-2 text-xs font-medium whitespace-nowrap text-neutral-500 dark:text-neutral-200"
          variants={{
            rest: { opacity: 0, width: 0 },
            hover: { opacity: 1, width: "auto" },
          }}
          transition={{ duration: 0.3 }}
        >
          {tech.name}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default TechExpand;
