"use client";

import Tilt from "@/components/animations/Tilt/Tilt";
import { Typewriter }  from "@/components/animations/Typewriter/Typewriter";
import { Button } from "@/components/ui/button";
import ExportedImage from "next-image-export-optimizer";
import { useRef } from "react";

export const FinalSection = () => {
  const tiltRef = useRef(null);
  return (
    <section ref={tiltRef} className="container mx-auto grid [&_div]:col-start-1 [&_div]:row-start-1 md:[&_div]:col-start-auto md:[&_div]:row-start-auto md:grid-cols-2 gap-20 pb-0 px-4 ">
      <div className="flex flex-col items-start md:justify-center z-10 mb-10 md:mb-0">
        <Typewriter asChild>
          <h2 className="font-semibold text-4xl lg:text-6xl leading-tight text-gray-100 mb-9">
            Ready to lead the future of news?
          </h2>
        </Typewriter>
        <p className="text-silver text-2xl leading-9 mb-16">Go to speak!</p>

        <Button className="rounded-[50px] px-10" asChild>
          <a href="https://calendly.com/sergej-simonenko" target="_blank">
            Book a Call
          </a>
        </Button>
      </div>
      <div className="relative isolate w-1/2 md:w-full self-end justify-self-end z-0 overflow-hidden">
        <Tilt refTarget={tiltRef}>
          <ExportedImage
            className="brightness-50 md:brightness-100"
            src="/images/ai_journalist.png"
            width="850"
            height="850"
            alt="AI Journalist"
          />
        </Tilt>
        <ExportedImage
          className="absolute top-1/2 -right-10 -z-[1] -translate-y-1/2"
          src="/images/geometric.png"
          width="920"
          height="840"
          alt="geometric lines and shapes"
        />
      </div>
    </section>
  );
};
