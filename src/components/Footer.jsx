import React from "react";
import Scroll from "react-scroll";
import { Link } from "react-scroll";
import RiveComponent from "@rive-app/react-canvas";

const Footer = () => {
  let scroll = Scroll.animateScroll;
  const [times, settimes] = React.useState(0);

  const visits = () => {
    fetch("https://api.countapi.xyz/update/ang_portfolio/angegonzalez?amount=1")
      .then((res) => res.json())
      .then((res) => settimes(res.value));
  };

  React.useEffect(() => {
    visits();
  }, []);

  return (
    <>
      <div className=" h-auto bg-dark-green-dark pt-10">
        <div className="">
          <div className="flex flex-row justify-evenly items-center mb-10 lg:mb-0 px-8">
            <div
              className="hidden lg:block items-center p-8 h-96 w-96"
              data-aos="fade-up"
            >
              <RiveComponent
                src="/assets/face.riv"
                stateMachines={"State Machine"}
              ></RiveComponent>
            </div>
            <div className="lg:max-w-xl max-w-sm">
              <p
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-dark-green-light text-left "
                data-aos="fade-up"
              >
                Art challenges technology, but technology inspires art
              </p>
              <span
                className="text-xs md:text-base xl:text-xl font-semibold navbar-text text-left text-dark-green-light bg-emerald-300/20 py-1 px-3 lg:px-4 lg:py-2 rounded-full"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Creating disruptive things, for disruptive people ...
              </span>
            </div>
            <div className="" data-aos="fade-up">
              <div className="flex items-center flex-col ">
                <p className="text-xs md:text-base font-normal navbar-text text-white text-left mb-2 xl:mb-5 cursor-pointer">
                  <Link to="experience" smooth duration={1200} delay={150}>
                    Experience
                  </Link>
                </p>
                <p className="text-xs md:text-base font-normal navbar-text text-white text-left mb-2 xl:mb-5 cursor-pointer">
                  <Link to="projects" smooth duration={1200} delay={150}>
                    Projects
                  </Link>
                </p>
                <p
                  className="text-xs md:text-base font-normal navbar-text text-white text-left mb-2 xl:mb-5 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/angegonzalez/",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                </p>
                <p
                  className="text-xs md:text-base  font-normal navbar-text text-white text-left mb-2 xl:mb-5 cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/angegonzalez", "_blank")
                  }
                >
                  GitHub
                </p>
                <p
                  className="text-xs md:text-base  font-normal navbar-text text-white text-left xl:mb-5 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/mateogzlb/",
                      "_blank"
                    )
                  }
                >
                  Instagram
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full h-32 px-10">
            <div className="flex justify-between items-center w-full h-full border-white border-t  ">
              <p className="text-xs md:text-base font-normal text-white text-left text-dark-green-light">
                © 2021, visited {times} times
              </p>
              <p
                className="text-xs md:text-base font-normal navbar-text text-white text-left cursor-pointer "
                onClick={() => {
                  scroll.scrollTo(0);
                }}
              >
                Back to top
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
