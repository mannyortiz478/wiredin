import React from "react"
import Image from "next/image"
import { FaBriefcase, FaGraduationCap, FaPencilAlt, FaHome } from 'react-icons/fa'  // Import icons

const executiveBoard = [
  {
    name: "John Doe",
    role: "President",
    year: "Senior",
    major: "Computer Science",
    hometown: "Los Angeles, CA",
    image: "/john-doe.jpg"
  },
  
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    year: "Junior",
    major: "Information Technology",
    hometown: "New York, NY",
    image: "/jane-smith.jpg"
  },
  // Add more members as needed
]

const ExecutiveBoardSection = () => {
  return (
    <section id="executive-board">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Executive Board
          <hr className="w-12 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-12">
          {executiveBoard.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white w-full max-w-md dark:bg-green-500">
              <Image
                src={member.image}
                alt={`${member.name}'s image`}
                width={125}
                height={125}
                className="rounded-full mb-6"
              />
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-500 dark:text-white mb-2">{member.name}</h2>
                <div className="flex items-center justify-center text-xl text-sky-400 dark:text-white mb-1">
                  <FaBriefcase className="mr-2 text-white-400" /> {member.role}
                </div>
                <div className="flex items-center justify-center text-xl text-white-500 mb-1">
                  <FaGraduationCap className="mr-2" /> {member.year}
                </div>
                <div className="flex items-center justify-center text-xl text-white-500 mb-1">
                  <FaPencilAlt className="mr-2" /> {member.major}
                </div>
                <div className="flex items-center justify-center text-xl text-white-500">
                  <FaHome className="mr-2" /> {member.hometown}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExecutiveBoardSection
