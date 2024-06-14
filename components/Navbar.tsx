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
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={handleNavItemClick}
            >
              <div className="container flex items-center space-x-2 cursor-pointer">
                <img
                  src="wiredin-logo.png"
                  alt="Logo"
                  className="h-10 w-auto"
                />
                <h2 className="text-2xl font-bold text-green-500">WIRED-IN</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-lg outline-none focus:border-grey-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex-1 justify-center md:text-center">
          <div
            className={`pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-900 dark:text-neutral-100 cursor-pointer transition-all border-b-2 border-transparent hover:border-sky-500"
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
          </div>
        </div>

        <div className="md:text-right">
          <div className="flex items-center justify-end space-x-4">
            <div className={navbar ? "flex space-x-4" : "hidden"}>
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-green-400 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
            </div>
            <div className={navbar ? "hidden" : "md:flex"}>
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-green-400 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
