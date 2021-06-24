import React from "react";
import "../Styles/NavBar.css";
const NavBar = () => {
  return (
    <div className=" w-full items-center px-36 pt-10 fixed">
      <div className="grid grid-flow-col grid-cols-2">
        <div className="flex items-center ">
          <p className="font-bold text-xl md:text-3xl" id="brand-text" >
            angonzalez
          </p>
        </div>
        <div className="flex items-center justify-end">
          <p className=" font-normal text-lg navbar-text mr-10 text-green-900">
            Projects
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
