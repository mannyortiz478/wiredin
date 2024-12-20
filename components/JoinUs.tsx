"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaDollarSign, FaSms } from "react-icons/fa";

const JoinUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="join" className="py-12" ref={sectionRef}>
      <div className="my-12 pb-12 md:pt-16 md:pb-48 flex flex-col md:flex-row items-center">
        <div
          className={`md:w-1/2 md:pr-10 ${
            isVisible ? "animate-slideInLeft" : ""
          } transition-transform duration-1000`}
        >
          <h1 className="text-center md:text-left font-bold text-4xl mb-4">
            Become a Member
            <hr className="w-10 h-1 my-4 bg-green-500 border-0 rounded mx-auto md:mx-0" />
          </h1>
          <p className="mb-6 text-lg">
            WIREDIN membership comes with numerous benefits and supports
            the organization to provide more opportunities. To be an official
            member requires three easy steps, which are listed below!
          </p>

          <div className="space-y-8">
            {["Connect", "Database", "Pay Dues"].map((title, index) => (
              <div
                key={index}
                className={`flex items-start transition-opacity duration-1000 ${
                  isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
                }`}
              >
                <span className="text-4xl text-green-500 font-bold mr-4">
                  {`0${index + 1}`}
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-sky-400 transition-colors hover:text-sky-500">
                    {title}
                  </h2>
                  <p className="mt-2 mb-2">
                    {title === "Connect"
                      ? "Join our GroupMe and connect with our social medias!"
                      : title === "Database"
                      ? "Fill out the Member form"
                      : "Pay $10 for full year, or $7 for one semester to the treasurer"}
                  </p>
                  <div className="flex space-x-3">
                    {title === "Connect" ? (
                      <>
                        <a
                          href="https://www.instagram.com/wiredin_psu/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-transform transform hover:scale-125"
                        >
                          <FaInstagram className="text-3xl text-pink-500 cursor-pointer hover:text-pink-600" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/wiredin-psu/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-transform transform hover:scale-125"
                        >
                          <FaLinkedin className="text-3xl text-blue-700 cursor-pointer hover:text-blue-800" />
                        </a>
                        <a
                          href="https://groupme.com/join_group/95889033/txau9z3j"
                          className="transition-transform transform hover:scale-125"
                        >
                          <FaSms className="text-3xl text-sky-300 cursor-pointer hover:text-sky-400" />
                        </a>
                      </>
                    ) : title === "Database" ? (
                      <button className="px-4 py-2 bg-neutral-300 text-black font-bold rounded-md hover:bg-neutral-200 transition-colors animate-pulse">
                        WIREDIN Member Database
                      </button>
                    ) : (
                      <a
                        href="https://cash.app/$yourcashapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center text-green-500 transition-transform transform hover:scale-105"
                      >
                        <FaDollarSign className="text-3xl text-green-500 cursor-pointer hover:text-green-600" />
                        <p>Cashapp</p>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`md:w-1/2 flex justify-center mt-10 md:mt-0 transition-transform duration-500 ${
            isVisible ? "animate-slideInRight" : ""
          }`}
        >
          <Image
            src="/highlight1.jpg"
            alt="Wiredin Highlight Photo"
            width={500}
            height={600}
            className="rounded-3xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;