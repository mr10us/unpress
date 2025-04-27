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

export const IntegrationsSection = () => {
  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      stopOnFocusIn: true,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className="grid md:grid-cols-2 gap-y-4">
        <h2 className="text-4xl lg:text-6xl font-semibold text-gray-100">
          <Highlight>CMS</Highlight> Integrations
        </h2>
        <Carousel
          plugins={[autoScroll.current]}
          opts={{
            loop: true,
          }}
          className={`flex items-center row-start-1 md:row-auto ${styles.marqueeContainer}`}
        >
          <CarouselContent>
            <CarouselItem className={`basis-full ${styles.marquee}`}>
              Your newsroom, upgraded — without disruption.
            </CarouselItem>
            <CarouselItem className={`basis-full ${styles.marquee}`}>
              Your newsroom, upgraded — without disruption.
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <p className="text-silver text-base lg:text-2xl leading-9 md:col-span-2">
          Seamless Integration with Leading CMS Platforms
        </p>
      </div>

      <ul className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-4 [&>*]:p-5 mt-14">
        {integrations.map((integration, index) => (
          <Card
            key={integration.name}
            asChild
            className="flex items-center justify-center"
          >
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
              <ExportedImage
                src={integration.img}
                alt={integration.name}
                width="150"
                height="150"
              />
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
