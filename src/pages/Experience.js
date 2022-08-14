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
            size={"100"}
            className="mx-auto text-orange-600 duration-300 stroke-2 hover:scale-110 "
          />
        </>
      ),
      style: "shadow-orange-600",
      title: "Html",
      href: "https://html.com/",
    },
    {
      icon: (
        <>
          <IoLogoCss3
            size={"100"}
            className="mx-auto text-blue-500 duration-300 stroke-2 hover:scale-110"
          />
        </>
      ),
      style: "shadow-blue-500",
      title: "Css",
      href: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      icon: (
        <>
          <FaJs
            size={"100"}
            className="mx-auto text-yellow-500 duration-300 stroke-2 hover:scale-110"
          />
        </>
      ),
      style: "shadow-yellow-500",
      title: "Javascript",
      href: "https://www.javascript.com/",
    },
    {
      icon: (
        <>
          <FaPhp
            size={"100"}
            className="mx-auto duration-300 stroke-2 text-sky-800 hover:scale-110 "
          />
        </>
      ),
      style: "shadow-sky-800",
      title: "Php",
      href: "https://www.php.net/",
    },
    {
      icon: (
        <>
          <FaReact
            size={"100"}
            className="mx-auto duration-300 stroke-2 text-cyan-600 hover:scale-110 "
          />
        </>
      ),
      style: "shadow-cyan-600",
      title: "React",
      href: "https://reactjs.org/",
    },
    {
      icon: (
        <>
          <FaLaravel
            size={"100"}
            className="mx-auto text-red-500 duration-300 stroke-2 hover:scale-110"
          />
        </>
      ),
      style: "shadow-red-500",
      title: "Laravel",
      href: "https://laravel.com/",
    },
    {
      icon: (
        <>
          <FaBootstrap
            size={"100"}
            className="mx-auto duration-300 stroke-2 text-violet-700 hover:scale-110"
          />
        </>
      ),
      style: "shadow-violet-700",
      title: "Bootstrap",
      href: "https://getbootstrap.com/",
    },
    {
      icon: (
        <>
          <SiTailwindcss
            size={"100"}
            className="mx-auto duration-300 stroke-2 text-sky-500 hover:scale-110"
          />
        </>
      ),
      style: "shadow-sky-500",
      title: "TailwindCss",
      href: "https://tailwindcss.com/",
    },
    {
      icon: (
        <>
          <SiAlpinedotjs
            size={"100"}
            className="mx-auto duration-300 stroke-2 text-slate-800 tex hover:scale-110"
          />
        </>
      ),
      style: "shadow-slate-800",
      title: "AlpineJs",
      href: "https://alpinejs.dev/",
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

        <div className="grid w-full grid-cols-2 gap-4 px-0 py-4 text-center sm:px-12 sm:gap-8 sm:grid-cols-3">
          {experience.map(({ style, title, icon, href }, index) => {
            return (
              <a
                href={href}
                key={index}
                target="_blank"
                rel="noreferrer"
                className={`max-w-xs py-2 rounded-lg shadow-md ${style}`}
              >
                {icon}
                <p className="mt-4 ">{title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
