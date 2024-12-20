"use client"; // Add this directive at the top of your file

import React from "react";
import Image from "next/image";
import { FaBriefcase, FaGraduationCap, FaPencilAlt, FaHome, FaLinkedin } from "react-icons/fa"; // Import icons

const executiveBoard = [
  {
    name: "Sereina Williams",
    role: "President",
    year: "Senior",
    major: "HCCD",
    hometown: "Philadelphia, PA",
    image: "/prez.png",
    linkedin: "https://www.linkedin.com/in/sereina-williams/",
  },
  {
    name: "Eryn Dennis",
    role: "Vice President",
    year: "Junior",
    major: "Data Science",
    hometown: "Philadelphia, PA",
    image: "/viceprez.jpg",
    linkedin: "https://www.linkedin.com/in/eryn-dennis/",
  },
  {
    name: "Stephanie Goodie-Obi",
    role: "Secretary",
    year: "Senior",
    major: "HCCD",
    hometown: "Chicago, IL",
    image: "/stephanie.jpg",
    linkedin: "https://www.linkedin.com/in/stephanie-goodie-obi-a6940a229/",
  },
  {
    name: "Kai Holden",
    role: "Treasurer",
    year: "Junior",
    major: "Cybersecurity",
    hometown: "Richmond, VA",
    image: "/kai.jpg",
    linkedin: "https://www.linkedin.com/in/zakaiholden/",
  },
  {
    name: "Sekou Makadji",
    role: "Outreach Chair",
    year: "Senior",
    major: "Cybersecurity",
    hometown: "Brooklyn, NY",
    image: "/sekou.jpg",
    linkedin: "https://www.linkedin.com/in/sekou-makadji-66258b1b9/",
  },
  {
    name: "Alana Hardin",
    role: "Fundraising Chair",
    year: "Senior",
    major: "Cybersecurity",
    hometown: "Philadelphia, PA",
    image: "/alana.jpg",
    linkedin: "https://www.linkedin.com/in/alanahardin/",
  },
  {
    name: "Manny Ortiz",
    role: "Web Coordinator",
    year: "Junior",
    major: "ETI",
    hometown: "Kennett Square, PA",
    image: "/manny.jpg",
    linkedin: "https://www.linkedin.com/in/emanuel-mendiola-ortiz/",
  },
  {
    name: "David Bayode",
    role: "Social Media Chair",
    year: "Sophomore",
    major: "IST",
    hometown: "Pittsburgh, PA",
    image: "/david.jpg",
    linkedin: "https://www.linkedin.com/in/david-bayode-5a8452337/",
  },
  {
    name: "Kelenna Konkwo",
    role: "Programming Chair",
    year: "Junior",
    major: "Computer Engineering",
    hometown: "Laurel, MD",
    image: "/lenny.jpg",
    linkedin: "https://www.linkedin.com/in/kelenna-konkwo-0504952a5/",
  },
  {
    name: "Tomi Olaore",
    role: "Coporate Liason",
    year: "Junior",
    major: "Computational DS",
    hometown: "Pittsburgh, PA",
    image: "/tomi.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Amani Kalua",
    role: "Membership Chair",
    year: "Senior",
    major: "Cybersecurity",
    hometown: "Washington, DC",
    image: "/amani.jpg",
    linkedin: "https://www.linkedin.com/in/amanikalua/",
  },
  
  // Add more members as needed
];

const ExecutiveBoardSection = () => {
  return (
    <section id="executive-board">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Executive Board
          <hr className="w-12 h-1 mx-auto my-4 bg-green-400 border-0 rounded" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-12">
          {executiveBoard.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 rounded-3xl shadow-md w-full max-w-md bg-white dark:bg-transparent dark:border dark:border-sky-400 transition-transform transform hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
            >
              <Image
                src={member.image}
                alt={`${member.name}'s image`}
                width={125}
                height={125}
                className="rounded-full mb-6 transition-transform transform hover:scale-110"
              />
              <div className="text-center dark:text-white">
                <h2 className="text-2xl font-bold text-green-500 dark:text-green-400 mb-2 transition-colors hover:text-green-600 dark:hover:text-green-300">
                  {member.name}
                </h2>
                <div className="flex items-center justify-center italic text-xl text-sky-400 dark:text-sky-400 mb-1 transition-transform transform hover:scale-105">
                  <FaBriefcase className="mr-2" /> {member.role}
                </div>
                <div className="flex items-center justify-center text-xl text-neutral-900 dark:text-white mb-1 transition-transform transform hover:scale-105">
                  <FaGraduationCap className="mr-2" /> {member.year}
                </div>
                <div className="flex items-center justify-center text-xl text-neutral-900 dark:text-white mb-1 transition-transform transform hover:scale-105">
                  <FaPencilAlt className="mr-2" /> {member.major}
                </div>
                <div className="flex items-center justify-center text-xl text-neutral-900 dark:text-white mb-1 transition-transform transform hover:scale-105">
                  <FaHome className="mr-2" /> {member.hometown}
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center px-4 py-2 border text-blue-500 rounded-3xl hover:bg-neutral-100 transition-colors"
                >
                  <FaLinkedin className="mr-2" /> Connect!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveBoardSection;