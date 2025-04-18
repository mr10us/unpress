import { Highlight } from "@/components/ui/Highlight";
import roadmap from "./roadmap.json";
import styles from "./IntegrationRoadmapSection.module.css";

export const IntegrationRoadmapSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <h2 className="mb-5">
        Integration <Highlight>Roadmap</Highlight>
      </h2>
      <p className="text-base lg:text-2xl leading-9 text-silver">
        Seamless Integration in Just a Few Steps
      </p>

      <div className={`w-full relative ${styles.listContainer}`}>
        <ul
          className={`grid ${styles.list} grid-cols-1 gap-5 md:grid-cols-5 mx-auto container`}
        >
          {roadmap.map((step, index) => {
            const position = index % 2 === 0 ? "top" : "bottom";

            return (
              <li
                key={step.name}
                className={`grid grid-cols-[auto_1fr] gap-5 md:flex items-center md:justify-between border-gray-100 md:col-start-[var(--grid-position)] ${
                  position === "top" ? styles.top : styles.bottom
                }`}
                style={{ "--grid-position": `${index + 1}` }}
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
