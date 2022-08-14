import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import Resume from "../file/Resume.pdf";

const SocialLinks = () => {
  const social = [
    {
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
      href: "https://www.linkedin.com/in/mezu-orizu-a50612230/",
    },
    {
      child: (
        <>
          <span> Github </span>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MZT7",
    },
    {
      child: (
        <>
          <span> Mail </span>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:duziorist@gmail.com",
    },

    {
      child: (
        <>
          <span className="pr-2"> Whatsapp </span>
          <ImWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/2349090202853?text=Hi%2C%20I%20am%20contacting%20you%20about",
    },
    {
      child: (
        <>
          <span> Resume </span>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: Resume,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col fixed left-0 top-[35%]">
      <ul>
        {social.map(({ child, style, href, download }, index) => {
          return (
            <li
              key={index}
              className={`duration-500 -translate-x-20 bg-gray-100 hover:translate-x-0 hover:rounded-r-md ${style}`}
            >
              <a
                href={href}
                className="flex items-center justify-between w-full p-1 text-gray-900 "
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
