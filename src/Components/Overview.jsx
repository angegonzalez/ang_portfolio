import React from "react";
import * as Icon from "react-feather";

const Overview = () => {
  return (
    <div className="h-screen ">
      <div className="back bg-gray-50 h-4/5">
        <div className="work-banner h-2/5"> </div>
        <div className="overview px-36 grid grid-cols-12">
          <div className="flex flex-col col-span-1">
            <p className="text-9xl text-green-500 font-bold navbar-text">2+</p>
            <p className="text-xl text-green-800 font-bold text-left navbar-text">
              years experience working{" "}
            </p>
          </div>
          <div className="col-span-2"></div>
          <div className="flex-col flex col-span-9">
            <div className="flex w-full justify-start">
              <p className="text-4xl text-green-900 font-bold w-2/3 text-left navbar-text">
                Developing SPA's on React.js, developing apps with Flutter, and
                using Python for ML/DL/IA learning{" "}
              </p>
            </div>
            <div className="flex justify-start h-80 mt-32">
              <div className="card bg-green-500  w-80 mr-5 rounded-md p-7 flex items-end">
                <div className="flex flex-col ">
                  <Icon.Code color="white" size={35} />
                  <p className="text-xl text-white font-bold w-full text-left navbar-text mt-2">
                    View web and mobile projects
                  </p>
                  <p className="text-lg text-white font-light w-full text-left navbar-text mt-2">
                    Let's see
                  </p>
                </div>
              </div>
              <div className="card bg-gray-100 w-80  mr-5 rounded-md  p-7 flex items-end">
                <div className="flex flex-col ">
                  <Icon.Monitor color="#064E3B" size={35} />
                  <p className="text-xl text-green-900  font-bold w-2/3 text-left navbar-text mt-2">
                    Frontend developer
                  </p>
                  <p className="text-lg text-white font-light w-full text-left navbar-text mt-2"></p>
                </div>
              </div>
              <div className="card bg-gray-100 w-80  mr-5 rounded-md  p-7 flex items-end">
                <div className="flex flex-col ">
                  <Icon.Smartphone color="#064E3B" size={35} />
                  <p className="text-xl text-green-900  font-bold w-full text-left navbar-text mt-2">
                    Mobile developer <br/>
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
