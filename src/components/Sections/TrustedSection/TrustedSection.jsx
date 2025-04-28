"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import trusted from "./trusted.json";
import { Card } from "@/components/ui/card";

export const TrustedSection = () => {
  const extendedTrusted = [...trusted, ...trusted];
  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      stopOnFocusIn: true,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  return (
    <section className="px-4 lg:px-0">
      <h2 className="text-center container mx-auto">Trust & Testimonials</h2>
      <p className="text-center text-base lg:text-2xl leading-9 text-silver container mx-auto">
        Trusted by innovative media companies worldwide.
      </p>

      <Carousel
        plugins={[autoScroll.current]}
        opts={{
          loop: true,
        }}
        className="mt-10 md:mt-16 lg:mt-24"
      >
        <CarouselContent className="py-4 -ml-4">
          {extendedTrusted.map((el, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 ml-4 h-40 w-20 text-6xl text-gray-100"
            >
              <Card asChild className="w-full h-full block !bg-white" style={{padding: 0}}>
                <a href={el.href} target="_blank">
                  <img
                    src={el.image}
                    alt={el.name}
                    width="100"
                    height="100"
                    className="object-contain object-center w-full h-full p-5"
                  />
                </a>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
