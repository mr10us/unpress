"use client";

import ExportedImage from "next-image-export-optimizer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export const ImageSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <Dialog>
        <DialogTrigger>
          <ExportedImage
            className="hidden md:inline"
            src="/images/desktop.png"
            width="1280"
            height="680"
          />
        </DialogTrigger>
        <DialogContent className="border-none text-gray-100 md:max-w-10/12 h-11/12">
          <DialogHeader className="hidden">
            <DialogTitle>Close up image</DialogTitle>
          </DialogHeader>
          <ExportedImage
            className="h-full w-auto mx-auto object-cover rounded-2xl"
            src="/images/desktop_close.png"
            width="1280"
            height="680"
          />
        </DialogContent>
      </Dialog>
      <ExportedImage
        className="md:hidden rounded-[20px] w-full"
        src="/images/mobile.png"
        width="375"
        height="667"
      />
    </section>
  );
};
