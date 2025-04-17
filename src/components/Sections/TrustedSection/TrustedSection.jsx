"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import trusted from "./trusted.json";

export const TrustedSection = () => {
  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      stopOnFocusIn: true,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  return (
    <section>
      <h2 className="text-center container mx-auto">Trust & Testimonials</h2>
      <p className="text-center text-2xl leading-9 text-silver container mx-auto">Trusted by innovative media companies worldwide.</p>

      <Carousel
        plugins={[autoScroll.current]}
        opts={{
          loop: true,
        }}
        className="mt-24"
      >
        <CarouselContent className="-ml-4">
          {trusted.map((el, index) => (
            <CarouselItem key={index} className="card basis-1/4 ml-4 h-40 w-20 text-6xl text-gray-100">{index}</CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

