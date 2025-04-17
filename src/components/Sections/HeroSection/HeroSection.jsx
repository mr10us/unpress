import ExportedImage from "next-image-export-optimizer";
import { Highlight } from "@/components/ui/Highlight";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="h-screen pt-[90px] bg-[radial-gradient(57.81%_57.81%_at_42.89%_40.51%,_#370540_0%,_#280945_32.69%,_#0A0113_100%)]">
      <div className="container mx-auto h-full flex gap-32">
        <div className="flex flex-col justify-center h-full w-full">
          <h1 className="text-gray-100 font-semibold text-[80px] leading-tight mb-10">
            Automate. Verify. Dominate.
          </h1>
          <p className="text-silver text-2xl leading-9 mb-8">
            In 5–10 years, will AI dominate newsrooms — or will human hands
            still do the heavy lifting? If you know the answer, it’s time to
            act.
          </p>
          <span className="text-gray-100 text-base">
            <p>
              Automate your newsroom workflow
              <Highlight>up to 80%</Highlight> with UnpressAI-powered initial
              data gathering and news content prep.
            </p>
          </span>
          <Button className="mt-12 rounded-[50px] w-fit px-10 py-4 font-semibold text-sm leading-4">
            Book a Call
          </Button>
        </div>
        <div className="flex items-center justify-center min-w-[500px]">
          <ExportedImage src="/images/hero.png" width="688" height="733" />
        </div>
      </div>
    </section>
  );
};
