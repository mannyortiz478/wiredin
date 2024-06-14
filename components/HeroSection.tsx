"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home" className="container mx-auto px-4">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex justify-center md:justify-end mr-5">
          <Image
            src="/wiredin-logo.png"
            alt="WIRED-IN Logo"
            width={325}
            height={325}
            className="shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 flex justify-center md:justify-start">
          <div>
            <h1 className="text-4xl font-bold mt-6 text-green-500 md:mt-0 md:text-7xl">WIRED-IN</h1>
            <p className="text-2xl mt-4 mb-6 md:text-2xl">
              An {" "}
              <span className="font-semibold text-blue-800">
                IST{" "}
              </span>
              student organization at Penn State, stands for (Wiring Innovation for Racial Equity and Development Inter-Network)
            </p>
            <Link
              to="join"
              className="text-neutral-100 font-semibold px-6 py-3 bg-sky-500 rounded shadow hover:bg-sky-400"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Join Us!
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
