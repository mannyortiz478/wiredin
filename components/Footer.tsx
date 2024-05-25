import React from "react"
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2024 Manny Ortiz<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/mannyortiz478" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-2 transition-transform cursor-pointer text-white-500 dark:text-white-100"
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/mannyortiz._/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-2 transition-transform cursor-pointer text-pink-500 dark:text-pink-100"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/emanuel-mendiola-ortiz/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-2 transition-transform cursor-pointer text-blue-500 dark:text-blue-100"
              size={30}
            />
          </a>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-2 transition-transform cursor-pointer text-red-500 dark:text-red-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
