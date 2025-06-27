import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-[-1]">
        <svg
          className="w-full h-full text-gray-300 dark:text-gray-700"
          fill="currentColor"
          viewBox="0 0 1024 1024"
          preserveAspectRatio="none"
        >
          <path d="M0 0h1024v1024H0z" />
          <path d="M512 1024L0 512 512 0h512v1024H512z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
            Mission
          </h1>
          <hr className="w-16 h-1 mx-auto bg-green-500 dark:bg-green-400 border-0 rounded" />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
            <Image
              src="/exec2.jpg"
              alt="About Image"
              width={425}
              height={325}
              className="rounded-3xl shadow-lg transition-transform transform hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Our Mission Statement
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We serve to a unite underrepresented students within the College of Information Sciences and Technology,
              to cater to a supportive network that ultimately fosters an inclusive environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;