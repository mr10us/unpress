"use client";

import { Highlight } from "@/components/ui/Highlight";
import Typewriter from "@/components/animations/Typewriter/Typewriter";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { _desktop } from "./_desktop.jsx";
import { _mobile } from "./_mobile.jsx";

export function FloppySection() {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative bg-black pt-40 pb-0 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-0">
        <Typewriter asChild>
          <h2 className="text-gray-100 text-4xl lg:text-6xl font-semibold mb-20 text-center">
            <Highlight>Unpress AI</Highlight> Solves the Critical Bottlenecks:
          </h2>
        </Typewriter>

        {isDesktop ? <_desktop /> : <_mobile />}
      </div>
    </section>
  );
}
