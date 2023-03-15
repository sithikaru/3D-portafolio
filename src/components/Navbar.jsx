import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={
        "${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-blend-darken"
      }
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          className="flex items-center gap-2"
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Zijja&nbsp;|
            <span className="sm:block hidden">
              &nbsp; Crafting exceptional digital experiences.
            </span>
          </p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title
                  ? "text-white text-[19px]"
                  : "text-secondary"
              } hover:text-white hover:font-bold text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer m-2"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle
                ? "hidden"
                : "flex p-6 bg-gray-900 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl"
            }`}
          >
            <ul className="list-none flex flex-col justify-end gap-4 items-start">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title
                      ? "text-white text-[19px]"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(Link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
