"use client";

import { Highlight } from "@/components/ui/Highlight";
import roadmap from "./roadmap.json";
import styles from "./IntegrationRoadmapSection.module.css";
import { motion } from "motion/react";

export const IntegrationRoadmapSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <h2 className="mb-5">
        Integration <Highlight>Roadmap</Highlight>
      </h2>
      <p className="text-base lg:text-2xl leading-9 text-silver">
        Seamless Integration in Just a Few Steps
      </p>

      <div className={`w-full relative ${styles.listContainer}`}>
        <ul
          className={`grid ${styles.list} grid-cols-1 gap-5 md:grid-cols-5 mx-auto container`}
        >
          {roadmap.map((step, index) => {
            const position = index % 2 === 0 ? "top" : "bottom";

            const startPositionTransition = position === "top" ? {opacity: 0, y: -100} : {opacity: 0, y: 100};
            const endPositionTransition = {opacity: 1, y: 0};

            return (
              <motion.li
                key={step.name}
                initial={startPositionTransition}
                whileInView={endPositionTransition}
                transition={{
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  duration: 2,
                }}
                viewport={{ once: true, amount: "all" }}
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
        </ul>
      </div>
    </section>
  );
};
