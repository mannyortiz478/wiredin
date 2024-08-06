"use client"; // this is a client component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import '../styles/globals.css'; // Ensure this path is correct

const HeroSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const fullText = `An IST student organization at Penn State, stands for (Wiring Innovation for Racial Equity and Development Inter-Network)`;

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="container mx-auto px-4">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex justify-center md:justify-end mr-5">
          <Image
            src="/web-2.png"
            alt="WIRED-IN Logo"
            width={325}
            height={525}
            className="rounded-3xl shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 flex justify-center md:justify-start">
          <div>
            <h1 className="text-4xl font-bold mt-6 text-green-500 md:mt-0 md:text-7xl">WIREDIN</h1>
            <p className="text-2xl mt-4 mb-6 md:text-2xl">
              <span className="hacker-text">{text}</span>
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
        </Link>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kode+Mono&display=swap');
        .hacker-text {
          font-family: 'Kode Mono', monospace;
          overflow: hidden;
          white-space: pre-wrap;
          border-right: 0.15em solid green; /* Cursor effect */
          animation: blink-caret 0.5s step-end infinite;
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: green; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
