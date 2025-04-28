"use client";

import { useRef, useState, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import setupTypewriter from "./helper";

export function Typewriter({
  children,
  delay = 0,
  asChild = false,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useIntersectionObserver(ref, () => setIsVisible(true));

  useEffect(() => {
    if (isVisible && ref.current) {
      setupTypewriter(ref.current, delay).start();
    }
  }, [isVisible]);

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
