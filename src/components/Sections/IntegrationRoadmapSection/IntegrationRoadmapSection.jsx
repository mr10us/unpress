import { Highlight } from "@/components/ui/Highlight";
import roadmap from "./roadmap.json";
import styles from "./IntegrationRoadmapSection.module.css";

export const IntegrationRoadmapSection = () => {
  return (
    <section className="container mx-auto">
      <h2 className="mb-5">
        Integration <Highlight>Roadmap</Highlight>
      </h2>
      <p className="text-2xl leading-9 text-silver">
        Seamless Integration in Just a Few Steps
      </p>

      <div className={`w-full relative ${styles.listContainer}`}>
        <ul
          className={`grid ${styles.list} mx-auto container`}
          style={{
            gridTemplateColumns: `repeat(${roadmap.length}, minmax(0, 1fr))`,
          }}
        >
          {roadmap.map((step, index) => {
            const position = index % 2 === 0 ? "top" : "bottom";

            return (
              <li
                key={step.name}
                className={`flex items-center justify-between border-gray-100 ${
                  position === "top" ? styles.top : styles.bottom
                }`}
                style={{ gridColumn: `${index + 1}` }}
              >
                <p className="font-semibold text-base text-gray-100">
                  {step.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
