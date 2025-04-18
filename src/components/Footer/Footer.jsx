import ExportedImage from "next-image-export-optimizer";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,_rgba(25,_1,_46,_0.5)_0%,_rgba(25,_1,_46,_0.15)_100%)] py-10">
      <div className="container mx-auto">
        <div className="grid justify-center lg:grid-cols-[0.5fr_1fr_0.5fr] gap-x-20 gap-y-10 pb-4">
          <a href="/" className="flex items-center flex-col lg:block">
            <ExportedImage src="/images/logo.svg" width="230" height="60" />
            <p className="mt-4 text-xs leading-5 text-gray-100">
              Unpress AI is a leading Ukrainian platform based on artificial
              intelligence that makes news creation fast, accurate and
              cost-effective.
            </p>
          </a>
          <form action="" className="justify-self-center text-center lg:text-start">
            <h3 className="text-gray-100 text-2xl font-semibold">
              We invite you to cooperate!
            </h3>
            <p className="text-gray-100 text-xs mb-5">Leave your email</p>

            <div className="flex">
              <input
                type="email"
                placeholder="example@example.com"
                className="text-gray-100 w-full lg:w-[200px] text-xs px-4 rounded-r-none rounded-l-[20px] border-[#515151] border-r-0 border p"
              />
              <Button className="rounded-l-none border border-primary rounded-r-[20px]">Send</Button>
            </div>
          </form>
          <div className="flex lg:flex-col gap-4 justify-self-center lg:justify-self-end text-xs text-gray-100 leading-5">
            <a href="tel:+380999999999">+38 000 000 00</a>
            <a className="underline" href="mailto:example@example.com">
              example@example.com
            </a>
          </div>
        </div>
        <div className="border-t border-[#2C2C2C] py-4 grid grid-cols-2">
          <p className="text-xs text-[#9F9F9F] leading-5">Unpress AI l All right reserved.2025</p>
          <span className="text-xs text-[#9F9F9F] leading-5 justify-self-end flex gap-4">
            <a href="https://vsolo.live/en/policies-terms/" target="_blank">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
