"use client";

import { Highlight } from "@/components/ui/Highlight";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import steps from "./steps.json";
import styles from "./StepsSection.module.css";
import { Typewriter }  from "@/components/animations/Typewriter/Typewriter";

export const StepsSection = () => {
  const [api, setApi] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section>
      <Typewriter asChild>
        <h2 className="mb-20 text-center">
          How <Highlight>Unpress AI</Highlight> Works
        </h2>
      </Typewriter>

      <Carousel
        className="container mx-auto px-4  mr-[calc((100vw-100%)_/_2)] w-full"
        setApi={setApi}
        opts={{
          loop: true,
          containScroll: "trimSnaps",
          align: "start",
        }}
      >
        <CarouselContent className={"-ml-1 " + styles.cards}>
          {steps.map((step, index) => (
            <CarouselItem
              key={index}
              className={
                "pl-1 basis-full md:basis-[66%] lg:basis-[30%] " + styles.card
              }
            >
              <p>STEP</p>
              <span>
                <p className="text-gray-100 text-base font-semibold">{step}</p>
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            aria-label="select step"
            onClick={() => api?.scrollTo(index)}
            className={`cursor-pointer h-2.5 rounded-[10px] transition-all ${
              index === selectedIndex ? "bg-primary w-20" : "bg-gray-100 w-10"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
