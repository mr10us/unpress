"use client";

import { useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { useInView } from "react-intersection-observer";
import setupTypewriter from "./helper";

export function Typewriter({
  children,
  delay = 0,
  asChild = false,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView && ref.current) {
      setupTypewriter(ref.current, delay).start();
    }
  }, [inView]);

  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
