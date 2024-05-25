import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML5" },
  { skill: "CSS3" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "MySQL" },
  { skill: "JSON" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Vercel" },
  { skill: "Prompt Engineering" },
  { skill: "AI" },
  { skill: "Firebase" },
  { skill: "Jupyter Notebooks" },
  { skill: "Linux" },
  { skill: "Google Cloud" },
  { skill: "Azure" },
  { skill: "Virtual Box" },
  { skill: "Tensor Flow" },
  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-10 h-1 mx-auto my-4 bg-sky-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl text-sky-600 font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Manny and I am a{" "}
              <span className="font-bold text-sky-400 ">{"highly ambitious"}</span>,
              <span className="font-bold text-sky-400 ">{" self-motivated"}</span>, and
              <span className="font-bold text-sky-400 ">{" curosity driven"}</span> 
              <span className="font-bold text-sky-400 ">{" adaptable"}</span> developer
              based in PA.
            </p>
            <br />
            <p>
              I am currently purseuing a undergraduate Bachelors of Science in Enterprise Technology Integration at Penn State University.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, to traveling
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-sky-400">
                you should have a growth mindset
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl text-sky-600 font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image2.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
