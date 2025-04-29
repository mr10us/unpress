import { useState } from "react";
import disksData from "./disks.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const _mobile = () => {
  const disks = disksData.slice(1, -1);
  const [openItem, setOpenItem] = useState("item-0");

  return (
    <div className="relative w-full h-full">
      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={(value) => setOpenItem(value)}
      >
        {disks.map((disk, index) => (
          <AccordionItem
            value={`item-${index}`}
            className="text-gray-100"
            key={index}
          >
            <AccordionTrigger>
              <h3
                className={`font-semibold text-lg ${
                  openItem === `item-${index}`
                    ? "text-primary"
                    : "text-gray-100"
                }`}
              >
                {disk.name}
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm">{disk.desc}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
