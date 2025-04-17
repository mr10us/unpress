import ExportedImage from "next-image-export-optimizer";
import navLinks from "./navLinks.json";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-10 w-full">
      <div className="backdrop-filter backdrop-blur-xs rounded-xl w-11/12 mx-auto">
      <div className="grid grid-cols-[auto_1fr_1fr] py-7 items-center gap-24 container mx-auto">
        <div className="logo">
          <ExportedImage src="/images/logo.svg" width="130" height="34" />
        </div>
        <nav className="h-fit justify-self-start">
          <ul className="flex gap-4 text-gray-100 text-base">
            {navLinks.map((link, index) => (
              <li key={link.name + index}>
                <Link href="link.href">{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      </div>
    </header>
  );
};
