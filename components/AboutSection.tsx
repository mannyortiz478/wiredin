import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Mission
          <hr className="w-10 h-1 mx-auto my-4 bg-green-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col items-center justify-center md:flex-row md:text-left mt-12">
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/hero-image2.png"
              alt="About Image"
              width={325}
              height={325}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10">
            <h1 className="text-3xl text-green-500 font-bold mb-6 text-center md:text-left">
              Our Mission Statement
            </h1>
            <p className="text-xl text-center italic text-sky-500">
            We serve to unite underrepresented students within the College of Information Sciences and Technology, 
            to cater to a supportive network that ultimately fosters an inclusive environment. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;