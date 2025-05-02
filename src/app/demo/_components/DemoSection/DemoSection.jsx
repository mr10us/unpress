"use client";

import { useRef } from "react";
import { Stopwatch } from "../Stopwatch/Stopwatch";
import { Tag } from "../Tag/Tag";
import tags from "./tags.json";
import ExportedImage from "next-image-export-optimizer";
import { HeroGeometry } from "@/components/Geometry/HeroGeometry";
import { Button } from "@/components/ui/button";

export const DemoSection = () => {
  const stopwatchRef = useRef();

  const handleStart = () => {
    stopwatchRef.current?.start();
  };

  const handleStop = () => {
    stopwatchRef.current?.stop();
  };

  return (
    <section className="relative xl:min-h-screen pt-[200px] pb-0 bg-[radial-gradient(57.81%_57.81%_at_42.89%_40.51%,_#370540_0%,_#280945_32.69%,_#0A0113_100%)] overflow-hidden isolate">
      <HeroGeometry className="absolute top-0 bottom-0 right-0 h-full object-cover -z-[1] pointer-events-none" />
      <div className="container px-4 mx-auto h-full">
        <h1 className="text-gray-100 text-center w-full lg:w-4/5 mx-auto font-semibold text-4xl md:text-6xl lg:text-6xl lg:text-[80px] leading-tight mb-10">
          Test the fastest news generation right now!
        </h1>
        <div className="text-gray-100">
          <Stopwatch ref={stopwatchRef} />
        </div>
        <p>Select one of those news tags:</p>

        <div className="flex gap-4 w-full overflow-x-scroll snap-x snap-mandatory no-scrollbar pb-4">
          {tags.map((tag, index) => (
            <Tag key={index} className="snap-center">
              {tag.name}
            </Tag>
          ))}
        </div>

        <Button
          size="lg"
          className="rounded-[50px] px-15 block mx-auto mt-4 bg-primary"
          onClick={handleStart}
        >
          Generate
        </Button>
      </div>
    </section>
  );
};
