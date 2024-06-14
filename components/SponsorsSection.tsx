import React from "react";
import Image from "next/image";
import SlideUp from "./SlideUp";

const sponsors = [
  {
    name: "Boeing",
    image: "/Boeing-logo.jpeg",
    link: "https://sponsor1.com"
  },
  {
    name: "Chevron",
    image: "/chevron-logo.png",
    link: "https://sponsor2.com"
  },
  {
    name: "EY",
    image: "/ey-logo.png",
    link: "https://sponsor3.com"
  },
  {
    name: "RSM",
    image: "/rsm-logo.png",
    link: "https://sponsor4.com"
  },
  {
    name: "College of IST",
    image: "/IST-logo.png",
    link: "https://sponsor5.com"
  },
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
              <h2 className="text-center text-xl font-semibold mt-4 dark:text-green-500">{sponsor.name}</h2>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
