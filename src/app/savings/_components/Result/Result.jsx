import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

export const Result = ({ result }) => {
  const containerRef = useRef(null);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const setRefs = (node) => {
    containerRef.current = node;
    inViewRef(node);
  };

  const formattedResult = () => {    
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      // notation: result >= 1000000 ? "compact" : "standard",
    });

    return formatter.format(result);
  };

  const splitResult = formattedResult().split("");

  useEffect(() => {
    if (!inView || !containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".slot-char");

    gsap.fromTo(
      chars,
      { y: "-100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        ease: "back.out(1.7)",
        duration: 0.5,
        stagger: {
          each: 0.05,
          from: "end",
        },
      }
    );
  }, [inView]);

  return (
    <div className="text-center">
      <h2 className="mb-10 text-4xl lg:text-6xl font-semibold text-primary">
        The amount of money <span className="text-accent">saved</span> per year
      </h2>

      <div className="px-10 py-8">
        <p
          ref={setRefs}
          className="text-6xl sm:text-8xl lg:text-[180px] font-semibold flex justify-center gap-1"
          style={{
            fontFamily: "sans-serif",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1px var(--color-primary)",
          }}
        >
          {splitResult.map((char, index) => (
            <span key={index} className="slot-char inline-block">
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
