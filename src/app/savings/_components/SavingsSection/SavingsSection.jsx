"use client";

import { Typewriter } from "@/components/animations/Typewriter/Typewriter";
import { HeroGeometry } from "@/components/Geometry/HeroGeometry";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "motion/react";
import { Result } from "../Result/Result";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { calculateSavings } from "./calculate";

export const SavingsSection = () => {
  const resultRef = useRef();
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const count = formData.get("count");
    const price = formData.get("price");

    if (!count) {
      toast.error("Please provide amount per day");
      return;
    }

    if (!price) {
      toast.error("Please provide price per article");
      return;
    }

    try {
      const res = calculateSavings(count, price);
      setResult(res);
    } catch (erorr) {
      toast.error("Please provide valid information");
      return;
    }
  };

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  return (
    <section className="relative xl:min-h-screen pt-[200px] pb-0 bg-[radial-gradient(57.81%_57.81%_at_42.89%_40.51%,_#370540_0%,_#280945_32.69%,_#0A0113_100%)] overflow-hidden isolate">
      <HeroGeometry className="absolute top-0 bottom-0 right-0 h-full object-cover -z-[1] pointer-events-none" />
      <div className="container px-4 mx-auto h-full">
        <Typewriter asChild>
          <h1 className="text-gray-100 text-center w-full lg:w-4/5 mx-auto font-semibold text-4xl md:text-6xl lg:text-6xl lg:text-[80px] leading-tight mb-10">
            Savings Calculator
          </h1>
        </Typewriter>
        <Typewriter asChild>
          <p className="text-gray-100 text-center text-lg">
            Let's see how much you can save with our service
          </p>
        </Typewriter>

        <motion.div
          initial={{ opacity: 0.4, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
          <Card className="mt-20 px-10">
            <form
              method="post"
              onSubmit={handleCalculate}
              className="md:w-1/2 mx-auto grid my-5 text-gray-100"
            >
              <Input
                placeholder="Daily articles amount"
                name="count"
                className="mb-3 rounded-[20px] py-6"
                inputMode="decimal"
              />
              <Input
                placeholder="Avg. article price"
                name="price"
                className="mb-4 rounded-[20px] py-6"
                inputMode="decimal"
              />
              <Button
                size="lg"
                className="rounded-[50px] px-15 block mx-auto mt-4 bg-primary align-middle"
                type="submit"
              >
                Compare
              </Button>
            </form>
          </Card>
        </motion.div>

        {result ? (
          <AnimatePresence>
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 scroll-mt-40"
            >
              <Result key={result} result={result} />
            </motion.div>
          </AnimatePresence>
        ) : null}
      </div>
    </section>
  );
};
