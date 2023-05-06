import React from "react";
import mezu from "../images/dev6.png";
import dev1 from "../images/dev9.png";
import dev2 from "../images/dev8.png";
import dev3 from "../images/dev7.png";
import dev4 from "../images/dev5.png";
import dev5 from "../images/e_mezu.png";

const Portfolio = () => {
  const portfolio = [
    {
      src: mezu,
      href: "https://www.precisepolls.org/poll/27",
    },
    {
      src: dev1,
      href: "https://precisetracker.com",
    },
    {
      src: dev2,
      href: "https://opiofiber.com.ng/",
    },
    {
      src: dev3,
      href: "https://precise.com.ng/",
    },
    {
      src: dev4,
      href: "https://oristouniversal.com/",
    },
    {
      src: dev5,
      href: "https://mezuo.netlify.app/",
    },
  ];

  return (
    <section name="Portfolio" className="w-full h-full py-8" id="Portfolio">
      <div className="container flex flex-col justify-end w-full h-full min-h-screen px-4 mx-auto lg:h-screen">
        <h1 className="inline text-4xl font-bold underline underline-offset-4 decoration-4 decoration-gray-50">
          Portfolio
        </h1>
        <p className="py-8 text-lg font-medium">Checkout my projects</p>

        <div className="grid grid-cols-1 gap-8 px-0 py-4 sm:px-12 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map(({ src, href }, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md shadow-gray-600"
                data-aos="zoom-out"
              >
                <div className="overflow-hidden h-60">
                  <img
                    src={src}
                    alt=""
                    className="object-cover w-full h-full duration-300 rounded-md hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2"
                  >
                    <button className="px-4 py-3 font-bold duration-200 rounded-md hover:scale-105 text-lime-900 bg-slate-100">
                      View
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="shadow-md"></div>
    </section>
  );
};

export default Portfolio;
