"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-gray-900 dark:text-white">
          Contact Us
          <hr className="w-10 h-1 mx-auto my-4 bg-green-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col items-center justify-center md:flex-row md:text-left mt-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700 dark:text-green-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-700 dark:text-green-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-gray-700 dark:text-green-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors w-full"
              >
                Send
                <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10 text-gray-900 dark:text-white">
            <p className="mb-6 text-lg">
              Feel free to reach out to us with any questions, feedback, or inquiries you may have. Well get back to you as soon as possible!
            </p>
            <p className="text-lg mb-2">
              <strong className=" text-sky-400 dark:text-green-500">Phone:</strong> (609) 477-9494
            </p>
            <p className="text-lg">
              <strong className=" text-sky-400 dark:text-green-500">Email:</strong> org.wiredin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;