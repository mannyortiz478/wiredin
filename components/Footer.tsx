import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0 dark:bg-neutral-200"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-green-500">
          © 2024 WIRED-IN<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-2">
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-2 transition-transform cursor-pointer text-white-500 dark:text-white-500"
              size={30}
            />
          </a>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-2 transition-transform cursor-pointer text-white-500 dark:text-white-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
