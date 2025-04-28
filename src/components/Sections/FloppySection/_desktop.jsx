import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import disksData from "./disks.json";
import ExportedImage from "next-image-export-optimizer";

gsap.registerPlugin(ScrollTrigger);

export const _desktop = () => {
  const disksWrapper = useRef(null);

  useGSAP(() => {
    const allDisks = gsap.utils.toArray(".disk");
    const disks = allDisks.slice(1, -1).reverse();
    const firstDisk = allDisks[0];
    const lastDisk = allDisks[allDisks.length - 1];
    const wrapper = disksWrapper.current;
    const section = wrapper.closest("section");

    if (!wrapper || !section) return;

    const spacing = 50;
    const compressedSpacing = 35;
    const total = disks.length;

    gsap.set(allDisks, {
      yPercent: -100,
      opacity: 0,
      scale: 0.95,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transformOrigin: "center center",
    });

    gsap.set(lastDisk, {
      yPercent: 100,
      opacity: 0,
      scale: 0.95,
      filter: "grayscale(1)",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=" + window.innerHeight * (total + 2),
        scrub: true,
        pin: true,
      },
    });

    disks.forEach((disk, index) => {
      const finalY = (index - 2 - (total - 1) / 2) * spacing * -1;

      const desc = disk.querySelector("p");
      const line = disk.querySelector("div.md\\:border-r");
      const h3 = disk.querySelector("h3");

      timeline.to(disk, {
        yPercent: 0,
        y: finalY,
        opacity: 1,
        scale: 1,
        filter: "grayscale(0)",
        zIndex: total + index,
        duration: 0.5,
        ease: "power2.out",
      });

      timeline.to(
        [desc, line],
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

      timeline.to(
        h3,
        {
          color: "#8d22a1",
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

      timeline.to(disk, {
        y: finalY,
        filter: "grayscale(0.6)",
        scale: 0.95,
        zIndex: total + index - 1,
        duration: 0.5,
        ease: "power2.out",
      });

      timeline.to(
        [desc, line],
        {
          opacity: 0,
          height: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );

      timeline.to(
        h3,
        {
          color: "#d0d0d0",
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );
    });

    timeline.to({}, { duration: 1 });

    disks.forEach((disk, index) => {
      const compressedY =
        (index - 2 - (total - 1) / 2) * compressedSpacing * -1;

      timeline.to(
        disk,
        {
          y: compressedY,
          scale: 0.9,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      );
    });

    const firstFinalY = (-(total + 1) / 2 + 2) * compressedSpacing;
    const lastFinalY = ((total + 1) / 2 + 2) * compressedSpacing;

    timeline.to(
      firstDisk,
      {
        yPercent: 0,
        opacity: 1,
        scale: 0.9,
        y: firstFinalY,
        filter: "grayscale(0)",
        zIndex: total + 11,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "<"
    );
    timeline.to(
      lastDisk,
      {
        yPercent: 0,
        opacity: 1,
        scale: 0.9,
        y: lastFinalY,
        filter: "grayscale(0)",
        zIndex: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "<"
    );
  }, []);

  return (
    <div ref={disksWrapper} className="relative h-screen w-full mx-auto">
      <ul className="relative w-full h-full">
        {disksData.map((disk, index) => {
          const diskImage = disk?.front_img || disk?.back_img;
          return (
            <li
              key={`${diskImage}_${index}`}
              className="disk group flex items-center gap-5 absolute w-full"
            >
              <ExportedImage
                className="w-1/2"
                src={diskImage}
                width="400"
                height="235"
                alt={disk.name + " interactive"}
              />
              <div
                className="w-full grid md:grid-cols-[0.2fr_1fr] md:gap-9"
                style={{ opacity: disk?.name ? 1 : 0 }}
              >
                <div className="md:border-r border-gray-100 relative">
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-100"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-100"></div>
                </div>
                <div className="lg:col-start-2 transition-all">
                  <h3 className="font-semibold text-base md:text-xl leading-tight text-primary mb-3.5">
                    {disk.name}
                  </h3>
                  <p
                    className="text-base leading-6 text-gray-100"
                    style={{ display: disk?.name ? "block" : "none" }}
                  >
                    {disk.desc}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
