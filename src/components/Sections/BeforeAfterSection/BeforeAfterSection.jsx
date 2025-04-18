import { Highlight } from "@/components/ui/Highlight";
import styles from "./BeforeAfterSection.module.css";

export const BeforeAfterSection = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-center mb-20">
        Before & <Highlight>After</Highlight>
      </h2>

      <div className={`card w-4/5 mx-auto grid lg:grid-cols-2 gap-20 ${styles.gridCard}`}>
        <div className="text-center">
          <h3 className="font-semibold text-lg lg:text-3xl leading-tight text-[#B1B1B1]">
            Traditional Newsroom
          </h3>
          <ul className="text-gray-100 text-base">
            <li>
              <p>3–5 editors to cover a few stories</p>
            </li>
            <li>
              <p>Manual fact-checking</p>
            </li>
            <li>
              <p>45–60 min publishing cycle</p>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg lg:text-3xl leading-tight text-gray-100">
           <Highlight>UNPRESS AI </Highlight>Newsroom
          </h3>
          <ul className="text-gray-100 text-base">
            <li>
              <p>1 editor managing dozens of stories</p>
            </li>
            <li>
              <p>Automated real-time verification</p>
            </li>
            <li>
              <p>5–15 min publishing cycle</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
