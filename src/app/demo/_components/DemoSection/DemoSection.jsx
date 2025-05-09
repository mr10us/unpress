"use client";

import { useRef, useState } from "react";
import { Stopwatch } from "../Stopwatch/Stopwatch";
import { Tag } from "../Tag/Tag";
import tags from "./tags.json";
import { HeroGeometry } from "@/components/Geometry/HeroGeometry";
import { Button } from "@/components/ui/button";
import { generateNews } from "./api";
import { toast } from "sonner";
import { Result } from "../Result/Result";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { ProgressBlock } from "../ProgressBlock/ProgressBlock";

export const DemoSection = () => {
  const stopwatchRef = useRef();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const stopTimer = () => {
    stopwatchRef.current?.stop();
  };
  const startTimer = () => {
    stopwatchRef.current?.start();
  };
  const resetTimer = () => {
    stopwatchRef.current?.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const subject = formData.get("subject");

    if (!subject) {
      toast.error("Please enter a subject.");
      return;
    }

    startTimer();
    setLoading(true);

    try {
      const response = await generateNews(subject);

      if (response.title) {
        stopTimer();
        setResult(response);
      } else {
        toast.error(response.message || "Unknown error occurred.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while generating news.");
    } finally {
      setLoading(false);
      stopTimer();
    }
  };

  return (
    <section className="relative xl:min-h-screen pt-[200px] pb-0 bg-[radial-gradient(57.81%_57.81%_at_42.89%_40.51%,_#370540_0%,_#280945_32.69%,_#0A0113_100%)] overflow-hidden isolate">
      <HeroGeometry className="absolute top-0 bottom-0 right-0 h-full object-cover -z-[1] pointer-events-none" />
      <div className="container px-4 mx-auto h-full">
        <h1 className="text-gray-100 text-center w-full lg:w-4/5 mx-auto font-semibold text-4xl md:text-6xl lg:text-6xl lg:text-[80px] leading-tight mb-10">
          Test the fastest news generation right now!
        </h1>
        <div className="text-gray-100 mb-6">
          <Stopwatch ref={stopwatchRef} />
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex gap-4 w-full overflow-x-scroll snap-x snap-mandatory no-scrollbar pb-4">
            {tags.map((tag, index) => (
              <Tag
                key={index}
                className="snap-center"
                onChange={resetTimer}
                value={tag.name}
              >
                {tag.name}
              </Tag>
            ))}
          </div>

          <Button
            size="lg"
            type="submit"
            className="rounded-[50px] px-15 mb-20 block mx-auto text-xl mt-4 bg-primary"
            onClick={resetTimer}
            disabled={loading}
          >
            Generate
          </Button>
        </form>
        <AnimatePresence>
          {loading ? (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
            >
              <ProgressBlock signal={result} />
            </motion.div>
          ) : null}
          {result && (
            <>
              <motion.div
                initial={{ opacity: 0.4, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.4, y: -100 }}
              >
                <Result
                  title={result.title}
                  content={result.content}
                  addedAt={result.origin.added_at}
                  origin={result.origin.url}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0.4, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.4, y: -100 }}
                className="mt-10 pb-20 flex justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-[50px] px-15 mb-20 text-xl mt-4 bg-primary"
                >
                  <Link href="/savings/">Next</Link>
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
