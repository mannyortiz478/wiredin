import React from "react";
import Image from "next/image";
import SlideUp from "./SlideUp";

const sponsors = [
  {
    name: "Chevron",
    image: "/chevron-logo.png",
    link: "https://www.chevron.com"
  },
  {
    name: "EY",
    image: "/ey-logo.png",
    link: "https://www.ey.com"
  },
  {
    name: "KPMG",
    image: "/kpmg-logo.png",
    link: "https://home.kpmg"
  },
  {
    name: "PwC",
    image: "/pwc-logo.png",
    link: "https://www.pwc.com"
  },
  {
    name: "Accenture",
    image: "/accenturelogo.png",
    link: "https://www.accenture.com"
  },
  {
    name: "Capital One",
    image: "/Capital-One-Logo.png",
    link: "https://www.capitalone.com"
  },
  {
    name: "Deloitte",
    image: "/Deloitte-Logo-PNG-Pic.png",
    link: "https://www2.deloitte.com"
  },
  {
    name: "PEPISCO",
    image: "/pepisco-logo.png",
    link: "https://www.pepsico.com"
  },
  {
    name: "NSA",
    image: "/nsa-logo.png",
    link: "https://www.nsa.gov"
  },
  {
    name: "RSM",
    image: "/rsm-logo.png",
    link: "https://rsmus.com"
  },
  {
    name: "PNC",
    image: "/pnc-logo.png",
    link: "https://www.pnc.com"
  },
  {
    name: "General Atlantic",
    image: "/ga-logo.png",
    link: "https://www.generalatlantic.com"
  },
  {
    name: "College of IST",
    image: "/IST-logo.png",
    link: "https://ist.psu.edu"
  }
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-12">
      <h1 className="my-10 text-center font-bold text-4xl">
        Sponsors
        <hr className="w-10 h-1 mx-auto my-4 bg-green-500 border-0 rounded" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {sponsors.map((sponsor, idx) => (
          <SlideUp key={idx} offset="-300px 0px -300px 0px">
            <div className="flex flex-col items-center">
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={350}
                  height={350}
                  className="rounded-xl shadow-xl hover:opacity-70 transition-opacity"
                />
              </a>
              <h2 className="text-center text-xl font-semibold mt-4 text-neutral-900 dark:text-white">{sponsor.name}</h2>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
