"use client";

import { Highlight } from "@/components/ui/Highlight";
import { Typewriter }  from "@/components/animations/Typewriter/Typewriter";
import ExportedImage from "next-image-export-optimizer";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { _desktop } from "./_desktop.jsx";
import { _mobile } from "./_mobile.jsx";

export function FloppySection() {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative bg-black pt-40 pb-0 overflow-hidden isolate">
      <ExportedImage
        className="absolute left-1/2 -translate-x-1/2 h-full z-[-1]"
        src="/images/backgroundGradient.webp"
        width="1920"
        height="1080"
        alt="section background"
      />
      <div className="container mx-auto lg:grid lg:grid-cols-[1fr_2fr] lg:gap-10 items-center px-4 ">
        <Typewriter asChild>
          <h2 className="text-gray-100 text-4xl lg:text-6xl lg:mb-[80%] xl:mb-[50%] font-semibold mb-20 transition">
            <Highlight>Unpress AI </Highlight>
            Solves the Critical Bottlenecks:
          </h2>
        </Typewriter>
        {isDesktop ? <_desktop /> : <_mobile />}
      </div>
    </section>
  );
}
