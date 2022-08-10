import React from "react";
import mezu from "../images/e_mezu.png";
import dev1 from "../images/dev1.png";
import dev2 from "../images/dev2.png";
import dev3 from "../images/dev3.png";
import dev4 from "../images/dev4.png";
import dev5 from "../images/dev1.png";

const Portfolio = () => {
  const portfolio = [
    {
      src: mezu,
      href: "https://delifast.herokuapp.com/",
    },
    {
      src: dev1,
      href: "https://e-sho.herokuapp.com/",
    },
    {
      src: dev2,
      href: "https://moadvice.herokuapp.com/",
    },
    {
      src: dev3,
      href: "https://opio.herokuapp.com/",
    },
    {
      src: dev4,
      href: "https://mezu.herokuapp.com/",
    },
    {
      src: dev5,
      href: "https://delifast.herokuapp.com/",
    },
  ];

  return (
    <section name="Portfolio" className="w-full h-full py-8">
      <div className="container flex flex-col justify-end w-full h-full min-h-screen px-4 mx-auto lg:h-screen">
        <h1 className="inline text-4xl font-bold underline underline-offset-4 decoration-4 decoration-gray-50">
          Portfolio
        </h1>
        <p className="py-8">checkout my projects</p>

        <div className="grid grid-cols-1 gap-8 px-12 py-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-0">
          {portfolio.map(({ src, href }, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md shadow-gray-600"
              >
                <div className="overflow-hidden h-60">
                  <img
                    src={src}
                    alt=""
                    className="object-cover w-full h-full duration-300 rounded-md hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-center">
                  ,
                  <a href={href} target="_blank" rel="noreferrer">
                    <button className="px-4 py-3 font-bold duration-200 hover:scale-105 text-lime-900">
                      View
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
