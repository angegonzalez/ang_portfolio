import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-scroll";

const Overview = () => {
  return (
    <div className="h-screen dark:bg-dark-green-dark ">
      <div className="back bg-gray-50 dark:bg-dark-green-dark h-4/5">
        <div className="work-banner h-1/5 xl:h-2/5"> </div>
        <div className="overview px-5 xl:px-36 grid grid-cols-12 mt-10 xl:mt-0">
          <div className="flex flex-col xl:col-span-1 col-span-12" data-aos="fade-up">
            <p className="text-8xl xl:text-9xl text-green-500 font-bold text-left navbar-text dark:text-dark-green-light">2+</p>
            <p className="text-xl text-green-800 font-bold text-left navbar-text dark:text-dark-green-light">
              years experience working{" "}
            </p>
          </div>
          <div className="xl:col-span-2"></div>
          <div className="flex-col flex col-span-12 xl:col-span-9 mt-12 xl:mt-0">
            <div className="flex w-full justify-start">
              <p
                className="text-3xl  xl:text-4xl text-green-900 font-bold xl:w-2/3 text-left navbar-text dark:text-dark-green-light"
                data-aos="fade-up"
              >
                Developing SPA's on React.js, developing apps with Flutter, and
                using Python for ML/DL/IA learning{" "}
              </p>
            </div>
            <div className="flex justify-start h-60 xl:h-80 mt-10 xl:mt-32 w-full overflow-x-scroll xl:overflow-hidden">
              <div
                className="card bg-green-500 flex-shrink-0 w-2/3 xl:w-80 mr-5 rounded-md p-7 flex items-end"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex flex-col ">
                  <Icon.Code color="white" size={35} />
                  <p className="text-xl text-white font-bold w-full text-left navbar-text mt-2">
                    View web and mobile projects
                  </p>
                  <p className="text-lg text-white font-light w-full text-left navbar-text mt-2 cursor-pointer">
                    <Link to="projects" smooth duration={1200} delay={150}>
                      Let's see
                    </Link>
                  </p>
                </div>
              </div>
              <div
                className="card bg-gray-100 flex-shrink-0 w-2/3 xl:w-80  mr-5 rounded-md  p-7 flex items-end dark:bg-dark-green-light"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <div className="flex flex-col ">
                  <Icon.Monitor color="#064E3B" size={35} />
                  <p className="text-xl text-green-900  font-bold w-2/3 text-left navbar-text mt-2 ">
                    Frontend developer
                  </p>
                  <p className="text-lg text-white font-light w-full text-left navbar-text mt-2"></p>
                </div>
              </div>
              <div
                className="card bg-gray-100 flex-shrink-0 w-2/3 xl:w-80  mr-5 rounded-md  p-7 flex items-end dark:bg-dark-green-light" 
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="flex flex-col ">
                  <Icon.Smartphone color="#064E3B" size={35} />
                  <p className="text-xl text-green-900  font-bold w-full text-left navbar-text mt-2">
                    Mobile developer <br />
                    Python for AI/ML/DL
                  </p>
                  <p className="text-lg text-white font-light w-full text-left navbar-text mt-2"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
