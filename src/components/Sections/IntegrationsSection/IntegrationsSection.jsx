import { Highlight } from "@/components/ui/Highlight";
import styles from "./IntegrationsSection.module.css";
import integrations from "./integrations.json";
import ExportedImage from "next-image-export-optimizer";

export const IntegrationsSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <div className="grid md:grid-cols-2 gap-y-4">
        <h2 className="text-4xl lg:text-6xl font-semibold text-gray-100">
          <Highlight>CMS</Highlight> Integrations
        </h2>
        <div className={`relative flex items-center row-start-1 md:row-auto overflow-hidden whitespace-nowrap ${styles.marquee}`}>
          <div className="inline-block">
            <span className="mx-4">
              Upgrade your newsroom seamlessly — no disruptions involved.
            </span>
            <span className="mx-4">
              Upgrade your newsroom seamlessly — no disruptions involved.
            </span>
          </div>
        </div>

        <p className="text-silver text-base lg:text-2xl leading-9 md:col-span-2">
          Seamless Integration with Leading CMS Platforms
        </p>
      </div>

      <ul className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-4 [&>*]:p-5 mt-14">
        {integrations.map(integration => (
          <li key={integration.name} className="flex items-center justify-center card">
            <ExportedImage src={integration.img} alt={integration.name} width="150" height="150" />
          </li>
        ))}
        <li className="flex items-center justify-center card">
            <p className="whitespace-nowrap text-silver text-2xl leading-9">And More...</p>
          </li>
      </ul>
    </section>
  );
};
