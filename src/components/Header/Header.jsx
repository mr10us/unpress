import ExportedImage from "next-image-export-optimizer";
import navLinks from "./navLinks.json";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 lg:top-10 w-full z-50">
      <div className="backdrop-filter backdrop-blur-xs lg:rounded-xl container mx-auto bg-[#FFFFFF0a]">
        <div className="grid grid-cols-2 lg:grid-cols-[auto_1fr_1fr] py-7 px-4 items-center gap-4 lg:gap-24 container mx-auto">
          <a href="/" className="w-20 md:w-full">
            <ExportedImage src="/images/logo.svg" width="130" height="34" />
          </a>
          <nav className="h-fit justify-self-start hidden lg:block">
            <ul className="flex gap-4 text-gray-100 text-base">
              {navLinks.map((link, index) => (
                <li key={link.name + index}>
                  <Link href="link.href">{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-5 items-center justify-self-end col-start-3">
            <a href="#" target="_blank" className="text-base text-gray-300">
              Login
            </a>
            <a
              href="#"
              target="_blank"
              className="text-base text-gray-100 font-semibold flex border border-gray-500 rounded-full w-fit items-center overflow-hidden group"
            >
              <p className="p-3 py-2 whitespace-nowrap">Get Started</p>
              <div
                className="
    relative bg-primary rounded-full size-8 p-2 m-1
    before:content-[''] before:bg-primary before:absolute
    before:w-0 before:h-0
    group-hover:before:w-80 group-hover:before:h-40
    before:transition-all before:duration-300 before:rounded-full
    before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2
    before:z-[-1]
  "
              >
                <ExportedImage
                  src="/images/arrow.svg"
                  width={16}
                  height={16}
                  alt="arrow"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
