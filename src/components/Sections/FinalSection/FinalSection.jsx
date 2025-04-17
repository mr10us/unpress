import { Button } from "@/components/ui/button";
import ExportedImage from "next-image-export-optimizer";

export const FinalSection = () => {
  return (
    <section className="container mx-auto grid grid-cols-2 gap-20 pb-0">
      <div className="flex flex-col items-start justify-center">
        <h2 className="font-semibold text-6xl leading-tight text-gray-100 mb-9">
          Ready to lead the future of news?
        </h2>
        <p className="text-silver text-2xl leading-9 mb-16">Go to speak!</p>

        <Button className="rounded-[50px] px-10">Book a Call</Button>
      </div>
      <div className="relative isolate">
        <ExportedImage
          src="/images/ai_journalist.png"
          width="850"
          height="850"
          alt="AI Journalist"
        />
        <ExportedImage
          className="absolute top-1/2 -right-10 -z-[1] -translate-y-1/2"
          src="/images/geometric.png"
          width="920"
          height="840"
          alt="geometric lines and shapes"
        />
      </div>
    </section>
  );
};
