"use client";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Card({ className, asChild = false, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => setLoaded(true), 2000);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  const Comp = asChild ? Slot : "div";
  const delay = (Math.random() * 2).toFixed(2);

  return (
    <Comp
      data-slot="div"
      ref={ref}
      className={cn(`card ${loaded ? "" : "loading"}`, className)}
      style={{ "--delay": `${delay}s` }}
      {...props}
    />
  );
}

export { Card };
