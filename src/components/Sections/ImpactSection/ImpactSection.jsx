import Tilt from "@/components/animations/Tilt/Tilt";
import { Typewriter }  from "@/components/animations/Typewriter/Typewriter";
import ExportedImage from "next-image-export-optimizer";
import styles from "./ImpactSection.module.css"

export const ImpactSection = () => {
  return (
    <section className="overflow-hidden relative container mx-auto px-4 ">
      <div className={`${styles.gradient} absolute w-full h-[300px] rounded-full rotate-45 left-1/2 -translate-x-1/2 blur-[25px] lg:blur-[200px]`}></div>
      <Typewriter asChild>
        <h2 className="mb-20">Impact in Numbers</h2>
      </Typewriter>

      <ul className="grid gap-y-32 [&_p]:text-gray-100 [&_p]:text-base lg:[&_p]:text-xl lg:[&_p]:leading-9 [&_h3]:text-3xl lg:[&_h3]:text-5xl [&_h3]:font-semibold">
        <li className="grid lg:grid-cols-2 gap-4">
          <div className="justify-self-end">
            <Typewriter asChild>
              <h3 className="text-[#4D6A95] text-5xl font-semibold">
                Save up to
              </h3>
            </Typewriter>
            <Typewriter asChild>
              <p>on news production costs</p>
            </Typewriter>
          </div>
          <Tilt maxShift={10}>
            <ExportedImage
              src="/images/impacts/impact_1.svg"
              width="700"
              height="250"
            />
          </Tilt>
        </li>
        <li className="md:grid grid-cols-[auto_1fr] lg:grid-cols-2 grid-rows-[200px] gap-4">
          <Typewriter asChild>
            <h3 className="text-primary md:col-start-1 md:row-start-1">
              Publish
            </h3>
          </Typewriter>
          <Tilt maxShift={10} className="mb-4 md:mb-0 md:col-start-1 md:row-start-1 self-end">
            <ExportedImage
              src="/images/impacts/impact_2.svg"
              width="700"
              height="400"
            />
          </Tilt>
          <div>
            <Typewriter asChild>
              <span className="text-primary text-5xl font-semibold">
                faster
              </span>
            </Typewriter>
            <Typewriter asChild>
              <p>than traditional workflows.</p>
            </Typewriter>
          </div>
        </li>
      </ul>
    </section>
  );
};
