// import React from 'react'
import { useState, useEffect } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navcolor, setNavcolor] = useState("");
  const [navicon, setNavicon] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
      os: -100,
    },
    {
      id: 4,
      link: "Experience",
      os: -100,
    },
    {
      id: 5,
      link: "Contact",
      os: -100,
    },
    // {
    //   id: 6,
    //   link: "Home",
    // },
  ];
  // let Nav = true;
  const changeColorOnScroll = () => {
    if (window.scrollY >= 30) {
      return setNavcolor("bg-cyan-800 md:text-gray-200");
    }
    return setNavcolor("bg-transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColorOnScroll, true);

    return () => {
      window.removeEventListener("scroll", changeColorOnScroll);
    };
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 duration-700 z-10 ${navcolor}`}>
      <div className="container flex items-center justify-between h-20 px-4 py-5 mx-auto">
        <div className="font-mono text-4xl font-medium capitalize 2xl:ml-7">
          Mezu
        </div>
        <ul className="items-center hidden mr-4 space-x-7 md:flex">
          {links.map(({ id, link, os }, index) => {
            return (
              <li
                className="font-medium capitalize duration-200 cursor-pointer hover:scale-105"
                key={index}
              >
                <Link to={link} smooth={true} offset={os} duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className="z-20 cursor-pointer md:hidden "
          onClick={() => setNavicon(!navicon)}
        >
          {navicon ? (
            <CloseIcon fontSize="large" />
          ) : (
            <DehazeIcon fontSize="large" />
          )}
        </div>
        {/* MobileMenu */}
        {navicon && (
          <ul className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-screen mr-4 space-y-5 bg-gradient-to-b from-gray-400 to-gray-600 md:hidden">
            {links.map(({ id, link, os }, index) => {
              return (
                <li
                  onClick={() => setNavicon(!navicon)}
                  className="text-2xl font-medium capitalize duration-200 cursor-pointer hover:scale-105"
                  key={index}
                >
                  <Link
                    to={link}
                    smooth={true}
                    offset={os}
                    duration={500}
                    onClick={() => setNavicon(!navicon)}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
