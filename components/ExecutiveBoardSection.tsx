"use client"; // Add this directive at the top of your file

import React from "react";
import Image from "next/image";
import { FaBriefcase, FaGraduationCap, FaPencilAlt, FaHome, FaLinkedin } from "react-icons/fa"; // Import icons

const executiveBoard = [
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg",
    linkedin: "https://www.linkedin.com/in/johndoe",
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