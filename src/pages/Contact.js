import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-full py-8" name="Contact">
      <div className="container flex flex-col justify-start min-h-screen px-4 mx-auto lg:h-screen">
        <h1 className="inline text-4xl font-bold underline underline-offset-4 decoration-4 decoration-gray-50">
          Contact
        </h1>
        <p className="py-7">Submit the form below to get in touch with me</p>

        <form
          className="flex flex-col justify-center w-full mx-auto md:w-2/6"
          method="POST"
          action="https://getform.io/f/362a0113-4396-485b-84db-fc43462dc8bf"
        >
          <input
            type="text"
            name="name"
            className="p-2 text-black bg-transparent border-2 border-gray-600 rounded-t-md focus:outline-none"
            placeholder="Enter Name"
            required
          />
          <input
            type="email"
            name="email"
            className="p-2 text-black bg-transparent border-2 border-gray-600 rounded-sm focus:outline-none"
            placeholder="Enter Email"
            required
          />

          <textarea
            name="message"
            rows="12"
            className="p-2 text-black bg-transparent border-2 border-gray-600 rounded-b-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 mx-auto my-2 rounded-md bg-sky-800 text-sky-100"
          >
            Let's Chat
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
