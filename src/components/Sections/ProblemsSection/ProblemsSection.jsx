"use client";

import { Highlight } from "@/components/ui/Highlight";
import cards from "./cards.json";
import ExportedImage from "next-image-export-optimizer";
import { Card } from "@/components/ui/card";
import { Typewriter }  from "@/components/animations/Typewriter/Typewriter";
import { motion } from "motion/react";

export const ProblemsSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <Typewriter asChild>
        <h2 className="mb-5 flex gap-4">
          Time is Money.
          <Highlight>Save Both.</Highlight>
        </h2>
      </Typewriter>
      <Typewriter asChild>
        <p className="text-silver text-xl leading-9">
          Traditional newsrooms waste critical resources every day:
        </p>
      </Typewriter>

      <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            asChild
            className="grid grid-rows-subgrid row-span-3 gap-5 p-5"
          >
            <motion.li
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1 + 0.1,
                duration: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
            >
              <ExportedImage
                src={card.img}
                width="90"
                height="90"
                alt={card.title}
              />
              <h3 className="text-gray-100 text-4xl font-semibold">
                {card.title}
              </h3>
              <p className="text-silver text-base leading-normal">
                {card.desc}
              </p>
            </motion.li>
          </Card>
        ))}
      </ul>
    </section>
  );
};
