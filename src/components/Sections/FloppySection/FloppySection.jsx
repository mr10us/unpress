"use client";

import { Highlight } from "@/components/ui/Highlight";
import Typewriter from "@/components/animations/Typewriter/Typewriter";
import ExportedImage from "next-image-export-optimizer";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { _desktop } from "./_desktop.jsx";
import { _mobile } from "./_mobile.jsx";

export function FloppySection() {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative bg-black pt-40 pb-0 overflow-x-hidden isolate">
      <ExportedImage
        className="absolute inset-0 h-full z-[-1]"
        src="/images/backgroundGradient.webp"
        width="1920"
        height="1080"
        alt="section background"
      />
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-gray-100 text-4xl lg:text-6xl font-semibold mb-20 flex justify-center gap-4">
          <Highlight>
            <Typewriter>Unpress AI</Typewriter>
          </Highlight>
          <Typewriter delay={100}>Solves the Critical Bottlenecks:</Typewriter>
        </h2>

        {isDesktop ? <_desktop /> : <_mobile />}
      </div>
    </section>
  );
}
