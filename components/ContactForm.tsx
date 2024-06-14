"use client";  // Add this line at the top

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";  // Import the paper airplane icon

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
    // Here you can handle form submission, e.g., send the form data to a backend server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-12">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Contact Us
          <hr className="w-10 h-1 mx-auto my-4 bg-green-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col items-center justify-center md:flex-row md:text-left mt-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="font-medium text-gray-70 dark:text-green-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-70 dark:text-green-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="round-lg mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-gray-70 dark:text-green-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Send
                <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10">
            <p className="mb-4">
              Feel free to reach out to us with any questions, feedback, or inquiries you may have. Well get back to you as soon as possible!
            </p>
            <p className="text-lg dark:text-green-500">
              <strong>Phone:</strong> (609)477-9494
            </p>
            <p className="text-lg dark:text-green-500">
              <strong>Email:</strong> org.wiredin@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
