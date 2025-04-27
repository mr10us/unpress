import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function Card({ className, asChild = false, ...props }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const Comp = asChild ? Slot : "div";

  const delay = (Math.random() * 2).toFixed(2);
  return (
    <Comp
      data-slot="div"
      className={cn(`card ${loaded ? "" : "loading"}`, className)}
      style={{ "--delay": `${delay}s` }}
      {...props}
    />
  );
}

export { Card };
