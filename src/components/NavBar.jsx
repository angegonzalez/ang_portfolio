import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="flex bg-dark-green-dark h-20 xl:px-16 px-10">
      <div className="grid grid-flow-col grid-cols-2 w-full">
        <div className="flex items-center" data-aos="fade-up" data-aos-duration="1500">
          <p className="font-bold text-lg md:text-2xl " id="brand-text">
            ángel m. gonzález 
          </p>
          <span className="text-lg md:text-2xl ml-3"> 🏳️‍🌈</span>
        </div>
        <div className="flex items-center justify-end gap-5" data-aos="fade-up" data-aos-duration="1500">
          <p className="font-normal text-sm md:text-base navbar-text cursor-pointer text-dark-green-light">
            <Link to="experience" smooth duration={1200} delay={150}>
              Experience
            </Link>
          </p>
          <p className="font-normal text-sm md:text-base navbar-text cursor-pointer text-dark-green-light">
            <Link to="projects" smooth duration={1200} delay={150}>
              Projects
            </Link>
          </p>
          {/* <p className=" font-normal text-lg navbar-text mr-10  ">
            Works
          </p>
          <p className=" font-normal text-lg navbar-text mr-10  " >
            Contact
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
