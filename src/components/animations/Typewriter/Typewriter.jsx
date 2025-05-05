"use client";

import { useEffect, useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(SplitText);

export function Typewriter({
  children,
  delay = 0,
  speed = null,
  asChild = false,
}) {
  const elementRef = useRef(null);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const setRefs = (node) => {
    elementRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (!inView || !elementRef.current) return;

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        const split = new SplitText(elementRef.current, {
          type: "words,chars",
        });

        const chars = split.chars;
        const totalChars = chars.length;

        const stagger = speed === "default" ? 0.005 : 1.5 / totalChars;
        

        gsap.from(split.chars, {
          y: 0,
          opacity: 0,
          duration: 0.7,
          ease: "power4",
          stagger: stagger,
          delay: delay / 1000,
        });
      });
    }
  }, [inView, delay]);

  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      ref={setRefs}
      className="word-break-keep-all whitespace-normal"
    >
      {children}
    </Comp>
  );
}
