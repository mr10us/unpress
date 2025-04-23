import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

function Card({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div"

  const delay = (Math.random()*3).toFixed(2);
  return (
    (<Comp
      data-slot="div"
      className={cn("card", className)}
      style={{ "--delay": `${delay}s` }}
      {...props} />)
  );
}

export { Card };