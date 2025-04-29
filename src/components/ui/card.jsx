import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

function Card({ className, asChild = false, ...props }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useIntersectionObserver(ref, () => {
    setTimeout(() => setLoaded(true), 2000);
  });

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
