import { Highlight } from "@/components/ui/Highlight";
import cards from "./cards.json";
import ExportedImage from "next-image-export-optimizer";

export const ProblemsSection = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-gray-100 text-6xl font-semibold mb-5">
        Time is Money. <Highlight>Save Both</Highlight>.
      </h2>
      <p className="text-silver text-2xl leading-9">
        Traditional newsrooms waste critical resources every day:
      </p>

      <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14">
        {cards.map((card) => (
          <li
            key={card.title}
            className="card grid grid-rows-subgrid row-span-3 gap-5 p-5 bg-[linear-gradient(180deg,_rgba(25,_1,_46,_0.5)_0%,_rgba(25,_1,_46,_0.15)_100%);]"
          >
            <ExportedImage
              src={card.img}
              width="90"
              height="90"
              alt={card.title}
            />
            <h3 className="text-gray-100 text-4xl font-semibold">{card.title}</h3>
            <p className="text-silver text-base leading-normal">{card.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
