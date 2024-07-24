import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "Mission", page: "about" },
  { label: "About", page: "WeDo" },
  { label: "E-Board", page: "executive-board" },
  { label: "Sponsors", page: "sponsors" },
  { label: "Events", page: "calendar" },
  { label: "Gallery", page: "projects" },
  { label: "Contact", page: "contact" },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const handleNavItemClick = () => {
    if (navbar) {
      setNavbar(false);
    }
  };

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex justify-between items-center py-3 md:py-5">
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={handleNavItemClick}
        >
          <div className="container flex items-center space-x-2 cursor-pointer">
            <img src="wiredin-logo.png" alt="Logo" className="h-10 w-auto" />
            <h2 className="text-2xl font-bold text-green-500 roboto-mono">WIREDIN</h2>
          </div>
        </Link>

        <div className="flex items-center space-x-4 md:hidden">
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-sky-400 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-1 rounded-xl"
            >
              <RiMoonFill size={25} color="black" />
            </button>
          )}
          <button
            className="p-2 text-neutral-500 rounded-lg outline-none focus:border-grey-400 focus:border dark:text-grey-400"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center w-full">
          <div className="flex-grow flex justify-center">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className="block lg:inline-block text-black-400 hover:text-neutral-900 dark:text-neutral-100 cursor-pointer transition-all border-b-2 border-transparent hover:border-sky-500 mx-2"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNavItemClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex-shrink-0">
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-green-500 hover:bg-green-300 p-2 rounded-xl"
              >
                <RiSunLine size={25} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-1 rounded-xl"
              >
                <RiMoonFill size={25} color="black" />
              </button>
            )}
          </div>
        </div>
      </div>

      {navbar && (
        <div className="flex flex-col items-center justify-center md:hidden">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="block text-stone-900 hover:text-neutral-900 dark:text-neutral-100 cursor-pointer transition-all border-b-2 border-transparent hover:border-sky-500"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNavItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
        .roboto-mono {
          font-family: 'Roboto Mono', monospace;
          font-weight: 500;
        }
      `}</style>
    </header>
  );
}