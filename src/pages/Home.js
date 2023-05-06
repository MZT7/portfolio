import React from "react";
import mezu from "../images/mezu.jpg";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-scroll";

// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  return (
    <section className="h-screen py-8 pt-20 lg:pt-0" name="Home">
      <div className="container flex flex-col items-center justify-center h-full px-4 py-5 mx-auto md:flex-row">
        <div
          className="flex flex-col items-center justify-center h-full md:items-start"
          data-aos="fade-right"
        >
          <h1 className="text-3xl font-bold md:text-6xl">
            I'm a Software Developer
          </h1>
          <p className="max-w-md py-4">
            I have 4 years experience in building and designing software. I love
            working on web application using technologies like: React, Laravel,
            Tailwindcss, Alpinejs and Livewire.
          </p>
          <div className="group">
            <Link to="Portfolio" smooth={true} duration={500} offset={-100}>
              <button className="flex items-center p-2 px-3 rounded-md cursor-pointer bg-gradient-to-b from-cyan-200 to-blue-400">
                Portfolio
                <span className="ml-1 duration-500 group-hover:rotate-90">
                  <FaAngleRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div
          className="w-1/2 duration-300 cursor-pointer h-2/3 pt-7 lg:pt-0 hover:translate-x-10"
          data-aos="fade-left"
        >
          <img
            src={mezu}
            alt=""
            className="object-cover h-full m-0 mx-auto duration-300 border-4 border-gray-600 shadow-2xl rounded-2xl hover:skew-x-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
