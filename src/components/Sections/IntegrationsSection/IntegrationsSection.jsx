"use client";

import { Highlight } from "@/components/ui/Highlight";
import AutoScroll from "embla-carousel-auto-scroll";
import integrations from "./integrations.json";
import ExportedImage from "next-image-export-optimizer";
import { Card } from "@/components/ui/card";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import styles from "./IntegrationsSection.module.css";
import { motion } from "motion/react";
import { Typewriter } from "@/components/animations/Typewriter/Typewriter";

export const IntegrationsSection = () => {
  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="relative px-4">
      <ExportedImage
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full -z-10"
        src="/images/backgroundGradient.webp"
        width="1920"
        height="1080"
        alt="section background"
      />
      <div className="container mx-auto grid md:grid-cols-2 gap-y-4">
        <Typewriter asChild>
          <h2 className="text-4xl lg:text-6xl font-semibold text-gray-100">
            <Highlight>CMS</Highlight> Integrations
          </h2>
        </Typewriter>
        <div className="marquee text-lg text-primary">
          <div className="marquee__content">
            <p>Your newsroom, upgraded — without disruption.</p>
          </div>
          <div className="marquee__content" aria-hidden="true">
            <p>Your newsroom, upgraded — without disruption.</p>
          </div>
        </div>

        <p className="text-silver text-base lg:text-2xl leading-9 md:col-span-2">
          Seamless Integration with Leading CMS Platforms
        </p>
      </div>

      <ul className="container mx-auto grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-4 [&>*]:p-5 mt-14">
        {integrations.map((integration, index) => (
          <Card key={integration.name} asChild style={{ padding: 0 }}>
            <motion.li
              key={integration.name}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a
                className="w-full h-full flex items-center justify-center p-5"
                href={integration.href}
                target="_blank"
              >
                <ExportedImage
                  src={integration.img}
                  alt={integration.name}
                  width="150"
                  height="150"
                />
              </a>
            </motion.li>
          </Card>
        ))}
        <Card asChild className="flex items-center justify-center">
          <motion.li
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center"
          >
            <p className="whitespace-nowrap text-silver text-2xl leading-9">
              And More...
            </p>
          </motion.li>
        </Card>
      </ul>
    </section>
  );
};
