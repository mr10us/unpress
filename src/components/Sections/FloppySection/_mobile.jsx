import disksData from "./disks.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const _mobile = () => {
  const disks = disksData.slice(1, -1);
  return (
    <ul className="relative w-full h-full">
      {disks.map((disk, index) => (
        <li key={index} className="text-gray-100">
          <Accordion type="single" collapsible defaultValue="item-0">
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>
                <h3 className="font-semibold text-primary text-lg ">{disk.name}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm">{disk.desc}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
      ))}
    </ul>
  );
};
