import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <img
        className="object-cover max-h-40 xl:max-h-64 bg-gray-100 rounded-t-2xl object-top"
        src={props.img}
        alt="img"
      />

      <div className="flex flex-col justify-center  xl:p-10 p-7 h-full">
        <p className="navbar-text text-2xl xl:text-3xl font-semibold text-green-900 text-left">
          {props.title}
        </p>
        <p className="navbar-text text-md xl:text-lg font-normal text-gray-500 text-left mt-5">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default ProjectCard;
