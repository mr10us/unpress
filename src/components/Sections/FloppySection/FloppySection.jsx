import { Highlight } from "@/components/ui/Highlight";
import disks from "./disks.json";
import ExportedImage from "next-image-export-optimizer";

export const FloppySection = () => {
  return (
    <section className="bg-[radial-gradient(57.81%_57.81%_at_42.89%_40.51%,_#370540_0%,_#280945_32.69%,_#0A0113_100%)] pt-40 h-screen">
      <div className="container mx-auto grid grid-cols-[0.5fr_1fr] gap-10 items-center">
        <h2 className="text-gray-100 font-semibold text-6xl leading-tight">
          <Highlight>Unpress AI </Highlight>Solves the Critical Bottlenecks:
        </h2>
        <ul className="grid gap-10">
          {disks.map((disk, index) => {
            const diskImage = index === 0 ? disk.front_img : disk.back_img;
            const zIndex = disks.length - index;
            const isActive = index === 0;

            return (
              <li
                key={`${disk.front_img}_${index}`}
                className={`group flex items-center gap-5 -my-28 first:my-0 last:hidden ${isActive ? 'active' : ''}`}
                style={{ zIndex: zIndex }}
              >
                <ExportedImage
                  src={diskImage}
                  width="400"
                  height="235"
                  alt={disk.name}
                />
                <div className="w-full grid grid-cols-[0.2fr_1fr] gap-9">
                  <div className="border-r border-gray-100 relative group-[.active]:block hidden">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-100"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-100"></div>
                  </div>
                  <div className="group-[.active]:col-auto col-start-2">
                    <h3 className="font-600 group-[.active]:text-2xl group-[.active]:text-primary text-xl leading-tight text-[#A69AB2] mb-3.5">
                      {disk.name}
                    </h3>
                    <p className="text-base leading-6 text-gray-100 group-[.active]:block hidden">
                      {disk.desc}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
