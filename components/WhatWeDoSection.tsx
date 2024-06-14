import React from "react"
import { FaHandsHelping, FaUsers, FaBuilding, FaBriefcase, FaHands, FaPlane } from 'react-icons/fa'

const educationDetails = [
  {
    icon: <FaHandsHelping />,
    title: "Community Building Activities",
    description: "Fostering a sense of community and belonging through events and activities."
  },
  {
    icon: <FaUsers />,
    title: "Collaboration with Student Organizations",
    description: "Partnering with various student groups to promote diversity initiatives and create a more inclusive campus environment."
  },
  {
    icon: <FaBuilding />,
    title: "Collaboration with Companies",
    description: "Working with companies to create internship and job opportunities for underrepresented students."
  },
  {
    icon: <FaBriefcase />,
    title: "Career Prep Workshops",
    description: "Offering workshops and mentoring to help students prepare for successful careers."
  },
  {
    icon: <FaHands />,
    title: "Volunteering",
    description: "Engaging in community service projects that support the university and local community"
  },
  {
    icon: <FaPlane />,
    title: "Conferences",
    description: "Attending conferences that focus on diversity, equity, inclusion and career readiness topics to inspire and educate students."
  }
]

const WhatWEDoSection = () => {
  return (
    <section id="WeDo">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          What We Do
          <hr className="w-12 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-center space-y-6 mt-12">
          {educationDetails.map((detail, index) => (
            <div key={index} className="flex items-center w-full max-w-4xl p-4 rounded-2xl shadow-lg bg-white hover:bg-green-300 dark:bg-green-500">
              <div className="text-3xl text-green-500 mr-4 dark:text-white">{detail.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-green-600 dark:text-white">{detail.title}</h2>
                <p className="text-sm text-neutral-700 whitespace-pre-line">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWEDoSection
