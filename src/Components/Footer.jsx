import React from "react";
import Scroll from "react-scroll";
import { Link } from "react-scroll";
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
      <div className="bg-green-800 h-screen dark:bg-dark-green-medium">
        <div className="footer mx-5 xl:mx-36">
          <div className="grid grid-cols-12 ">
            <div
              className="hidden xl:col-span-4 xl:flex items-center p-16"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <img src="/footer.png" alt="footer" />
            </div>
            <div className="col-span-12 xl:col-span-6 h-96 mt-16 xl:mt-64 ">
              <p
                className="text-5xl xl:text-6xl font-bold navbar-text text-white dark:text-dark-green-light text-left max-w-2xl tracking-wide"
                data-aos="fade-up"
              >
                Art challenges technology, but technology inspires art
              </p>
              <p
                className="text-2xl font-semibold navbar-text text-left mt-14 dark:text-dark-green-light"
                style={{ color: "#f1f7ee" }}
                data-aos="fade-up"
              >
                Creating disruptive things, for disruptive people
              </p>
            </div>
            <div className="col-span-12 xl:col-span-2 xl:mt-64 mt-16" data-aos="fade-up">
              <div className="flex items-center flex-col ">
                <p className="text-lg font-normal navbar-text text-white text-left mb-2 xl:mb-5 cursor-pointer">
                  <Link to="projects" smooth duration={1200} delay={150}>
                    Projects
                  </Link>
                </p>
                <p
                  className="text-lg font-normal navbar-text text-white text-left mb-2  xl:mb-5 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/angel-mateo-gonzalez-83a610196/",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                </p>
                <p
                  className="text-lg font-normal navbar-text text-white text-left mb-2 xl:mb-5 cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/angegonzalez", "_blank")
                  }
                >
                  GitHub
                </p>
                <p
                  className="text-lg font-normal navbar-text text-white text-left xl:mb-5 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/angelgonzalez_b/",
                      "_blank"
                    )
                  }
                >
                  Instagram
                </p>
              </div>
            </div>
            <div className="col-span-12 border-t border-light h-32 flex items-center justify-between mt-14 xl:mt-36">
              <p className="text-md font-normal navbar-text text-white text-left mb-5 ml-16 dark:text-dark-green-light">
                © 2021, visited {times} times
              </p>
              <p
                className="text-md font-normal navbar-text text-white text-left mb-5 mr-16 cursor-pointer "
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
