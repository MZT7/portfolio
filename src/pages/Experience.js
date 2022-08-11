// import { Title } from "@mui/icons-material";
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiAlpinedotjs } from "react-icons/si";

const Experience = () => {
  const experience = [
    {
      icon: (
        <>
          <FaHtml5
            size={100}
            className="mx-auto text-orange-600 duration-300 stroke-2 hover:scale-110 "
          />
        </>
      ),
      style: "shadow-orange-600",
      title: "Html",
    },
    {
      icon: (
        <>
          <IoLogoCss3
            size={100}
            className="mx-auto text-blue-500 duration-300 stroke-2 hover:scale-110"
          />
        </>
      ),
      style: "shadow-blue-500",
      title: "Css",
    },
    {
      icon: (
        <>
          <FaJs
            size={100}
            className="mx-auto text-yellow-500 duration-300 stroke-2 hover:scale-110"
          />
        </>
      ),
      style: "shadow-yellow-500",
      title: "Javascript",
    },
    {
      icon: (
        <>
          <FaPhp
            size={100}
            className="mx-auto duration-300 stroke-2 text-sky-800 hover:scale-110 "
          />
        </>
      ),
      style: "shadow-sky-800",
      title: "Php",
    },
    {
      icon: (
        <>
          <FaReact
            size={100}
            className="mx-auto duration-300 stroke-2 text-cyan-600 hover:scale-110 "
          />
        </>
      ),
      style: "shadow-cyan-600",
      title: "React",
    },
    {
      icon: (
        <>
          <FaLaravel
            size={100}
            className="mx-auto text-red-500 duration-300 stroke-2 hover:scale-110"
          />
        </>
      ),
      style: "shadow-red-500",
      title: "Laravel",
    },
    {
      icon: (
        <>
          <FaBootstrap
            size={100}
            className="mx-auto duration-300 stroke-2 text-violet-700 hover:scale-110"
          />
        </>
      ),
      style: "shadow-violet-700",
      title: "Bootstrap",
    },
    {
      icon: (
        <>
          <SiTailwindcss
            size={100}
            className="mx-auto duration-300 stroke-2 text-sky-500 hover:scale-110"
          />
        </>
      ),
      style: "shadow-sky-500",
      title: "TailwindCss",
    },
    {
      icon: (
        <>
          <SiAlpinedotjs
            size={100}
            className="mx-auto duration-300 stroke-2 text-slate-800 tex hover:scale-110"
          />
        </>
      ),
      style: "shadow-slate-800",
      title: "AlpineJs",
    },
  ];

  return (
    <section className="w-full h-full py-8" name="Experience">
      <div className="container flex flex-col justify-center w-full min-h-screen px-4 mx-auto lg:h-screen ">
        <h1 className="inline text-4xl font-bold underline underline-offset-8 decoration-4 decoration-gray-50">
          Experience
        </h1>
        <p className="py-8 text-lg font-medium">
          These are the technologies I currently work with
        </p>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-4 text-center sm:grid-cols-3 sm:px-0">
          {experience.map(({ style, title, icon }, index) => {
            return (
              <div
                key={index}
                className={`max-w-xs py-2 rounded-lg shadow-md ${style}`}
              >
                {icon}
                <p className="mt-4 ">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
