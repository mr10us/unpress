"use client";

import { Highlight } from "@/components/ui/Highlight";
import roadmap from "./roadmap.json";
import styles from "./IntegrationRoadmapSection.module.css";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/animations/Typewriter/Typewriter";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export const IntegrationRoadmapSection = () => {
  const isDesktop = useIsDesktop();

  // Варианты для всей ul
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="container mx-auto px-4">
      <Typewriter asChild>
        <h2 className="mb-5">
          Integration <Highlight>Roadmap</Highlight>
        </h2>
      </Typewriter>

      <p className="text-base lg:text-2xl leading-9 text-silver">
        Seamless Integration in Just a Few Steps
      </p>

      <div className={`w-full relative ${styles.listContainer}`}>
        <motion.ul
          className={`grid ${styles.list} grid-cols-1 gap-5 md:grid-cols-5 mx-auto container`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants}
        >
          {roadmap.map((step, index) => {
            const position = index % 2 === 0 ? "top" : "bottom";

            const itemVariants = {
              hidden: {
                opacity: 0,
                y: !isDesktop ? (position === "top" ? -100 : 100) : 100,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  duration: 1.5,
                },
              },
            };

            return (
              <motion.li
                key={step.name}
                variants={itemVariants}
                className={`grid grid-cols-[auto_1fr] gap-5 md:flex items-center md:justify-between border-gray-100 md:col-start-[var(--grid-position)] ${
                  position === "top" ? styles.top : styles.bottom
                }`}
                style={{ "--grid-position": `${index + 1}` }}
              >
                <p className="font-semibold text-base text-gray-100">
                  {step.name}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};
