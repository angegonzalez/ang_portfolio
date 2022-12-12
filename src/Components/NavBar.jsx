import React from "react";
import "../Styles/NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className=" w-full items-center md:px-36 pt-10 dark:bg-dark-green-dark px-5 h-auto mb-5">
      <div className="grid grid-flow-col grid-cols-2">
        <div className="flex items-center ">
          <p className="font-bold text-xl md:text-3xl " id="brand-text">
            angonzalez
          </p>
        </div>
        <div className="flex items-center justify-end">
          <p className=" font-normal text-md md:text-lg navbar-text mr-10 text-green-900 cursor-pointer dark:text-dark-green-light">
            <Link to="projects" smooth duration={1200} delay={150}>
              Projects
            </Link>
          </p>
          {/* <p className=" font-normal text-lg navbar-text mr-10 text-green-900">
            Works
          </p>
          <p className=" font-normal text-lg navbar-text mr-10 text-green-900" >
            Contact
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
