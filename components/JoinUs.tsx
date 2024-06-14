import React from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope, FaDollarSign, FaSms } from "react-icons/fa";

const JoinUs = () => {
  return (
    <section id="join" className="py-12">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10">
          <h1 className="text-center md:text-left font-bold text-4xl mb-4">
            Become a Member
            <hr className="w-10 h-1 my-4 bg-green-500 border-0 rounded mx-auto md:mx-0" />
          </h1>
          <p className="mb-6 text-lg">
            Wired-In membership comes with numerous benefits as well as supports the organization to provide more opportunities. To be an official member requires three easy steps, which are listed below!
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <span className="text-4xl text-green-500 font-bold mr-4">01</span>
              <div>
                <h2 className="text-2xl font-bold text-sky-400">Connect</h2>
                <p className="mt-2 mb-2">Join our GroupMe and connect with our social medias!</p>
                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/wiredin_psu/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl text-pink-500 cursor-pointer" />
                  </a>
                  <a href="https://www.linkedin.com/in/wiredin-psu/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl text-blue-700 cursor-pointer" />
                  </a>
                  <a href="https://groupme.com/join_group/95889033/txau9z3j">
                    <FaSms className="text-3xl text-sky-300 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-4xl text-green-500 font-bold mr-4">02</span>
              <div>
                <h2 className="text-2xl font-bold text-sky-400">Database</h2>
                <p className="mt-2 mb-2">Fill out the Member form</p>
                <button className="px-4 py-2 bg-neutral-300 text-black font-bold rounded-md hover:bg-neutral-200 transition-colors">
                  WIRED-IN Member Database
                </button>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-4xl text-green-500 font-bold mr-4">03</span>
              <div>
                <h2 className="text-2xl font-bold text-sky-400">Pay Dues</h2>
                <p className="mt-2 mb-2">Pay $10 for full year, or $7 for one semester to the treasurer</p>
                <div className="flex space-x-4">
                  <a href="https://cash.app/$yourcashapp" target="_blank" rel="noopener noreferrer" className="text-center text-green-500">
                    <FaDollarSign className="text-3xl text-green-500 cursor-pointer" />
                    <p>Cashapp</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/path/to/your-image.jpg"
            alt="Wiredin photo"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
