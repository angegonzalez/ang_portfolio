import React from "react";
import RiveComponent from "@rive-app/react-canvas";

const Experience = () => {
  return (
    <div className="flex flex-col bg-dark-green-dark h-auto justify-center items-center pt-14 lg:pt-0 lg:pb-10">
      <div className="lg:grid lg:grid-rows-3 lg:grid-cols-2 flex flex-col">
        <div className="hidden lg:block lg:row-span-3">
          <div className="w-full h-full">
            <RiveComponent
              src='/assets/bouncy_walkcycle.riv'
              stateMachines="State Machine 1"
            >
              {" "}
            </RiveComponent>
          </div>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 flex justify-center ">
          <div
            className="rounded-t-3xl lg:rounded-3xl p-8 w-5/6 lg:w-5/6 h-full col-span-1 row-span-1 bg-cyan-900/20"
            data-aos="flip-down" data-aos-duration="1000"
            name="experience"
          >
            <p className="font-bold text-2xl xl:text-4xl text-left leading-none   text-dark-green-light">
              Related experience
            </p>
            <div
              className="h-1 w-16"
              style={{ backgroundColor: "white" }}
            ></div>
            <div className="flex h-auto gap-5 mt-9">
              <div className="flex w-28">
                <img src="/assets/icons/chart-iso-color.svg" alt="" />
              </div>
              <div className="flex w-auto flex-col">
                <p className="font-bold text-xl xl:text-2xl text-left leading-none  text-dark-green-light">
                  DNED - Universidad Nacional de Colombia
                </p>
                <p className="text-md xl:text-lg text-left  text-dark-green-light font-medium my-2">
                  Sept/22 - Dec/22
                </p>
                <p className="text-dark-green-light text-left">
                  I worked with the DNED in Google Worskpace accounts
                  management, statistics extraction and analysis (using{" "}
                  <b className="">Python</b>), and automating processes with the{" "}
                  <a href="https://github.com/GAM-team/GAM">
                    <b className="">GAM tool</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 flex justify-center items-center" >
          <div
            className="lg:rounded-3xl w-5/6 h-5/6 p-8 bg-sky-900/20"
            data-aos="flip-down" data-aos-delay="200" data-aos-duration="1000"
          >
            <div className="flex h-auto gap-5">
              <div className="flex w-28">
                <img src="/assets/icons/thumb-up-dynamic-color.svg" alt="" />
              </div>
              <div className="flex w-auto flex-col">
                <p className="font-bold text-xl xl:text-2xl text-left leading-none text-dark-green-light">
                  PLaS - Universidad Nacional de Colombia
                </p>
                <p className="text-md xl:text-lg text-left text-dark-green-light font-medium my-2">
                  Aug/22 - Dec/22
                </p>
                <p className="text-dark-green-light text-left">
                  I worked with the{" "}
                  <a href="http://plas.unal.edu.co/">PLas Research Group</a>,
                  developing page frontend, education in engineering data
                  analysis (using <b>Python</b>), and{" "}
                  <a href="https://github.com/JuezUN/INGInious">
                    <b>UNCode</b>
                  </a>
                  <b> Notebook grading API (using the Colab environment)</b>{" "}
                  development
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:row-span-1 flex justify-center ">
          <div
            className="rounded-b-3xl lg:rounded-3xl w-5/6 h-5/6 p-9 bg-blue-900/20"
            data-aos="flip-down" data-aos-duration="1000"
          >
            <div className="flex h-auto gap-5">
              <div className="flex w-28">
                <img src="/assets/icons/computer-dynamic-color.svg" alt="" />
              </div>
              <div className="flex w-auto flex-col">
                <p className="font-bold text-xl xl:text-2xl text-left leading-none   text-dark-green-light">
                  QA Analyst - Transport Systems S.A.S
                </p>
                <p className="text-md xl:text-lg text-left text-dark-green-light font-medium my-2">
                  Jul/21 - Jul/22
                </p>
                <p className="  text-dark-green-light text-left">
                  I worked with Transport Systems doing manual and automated
                  software testing. I built testing plan of a web-based
                  information system. I made some interface tests and API tests
                  to{" "}
                  <a href="https://deodata.co/">
                    <b>Deodata</b>
                  </a>
                  , an AI visual recognition app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;