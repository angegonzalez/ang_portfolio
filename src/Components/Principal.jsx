import React from "react";
import * as Icon from "react-feather";
import "../Styles/Principal.css";
import AOS from "aos";

const Principal = () => {
  const [showLetters, setshowLetters] = React.useState("");

  const wait = async (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const fillWord = async (word) => {
    for (let letter of word) {
      setshowLetters((state) => {
        return state + letter;
      });
      await wait(200);
    }
  };

  const deleteWord = async (word) => {
    // eslint-disable-next-line no-unused-vars
    for (let _ of word) {
      setshowLetters((state) => {
        return state.substring(0, state.length - 1);
      });
      await wait(200);
    }
  };

  const renderWords = async () => {
    const words = [
      "frontend",
      "react.js",
      "typescript",
      "javascript",
      "IA/ML",
      "python",
      "mobile",
      "flutter",
    ];
    while (true) {
      for (let word of words) {
        await fillWord(word);
        await deleteWord(word);
      }
    }
  };

  React.useEffect(() => {
    renderWords();
    AOS.init();
  });

  return (
    <div className="h-screen flex items-center md:px-36 -mt-16 dark:bg-dark-green-dark px-5 ">
      <div className="flex flex-col items-center xl:grid xl:grid-cols-2">
        <div className="w-full xl:w-2/3 text-start flex items-center ">
          <div className="text-wrapper ">
            <p
              className="font-bold text-5xl xl:text-7xl navbar-text text-left leading-normal text-green-900 self-center dark:text-dark-green-light"
              data-aos="flip-down"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              Angel Mateo González
            </p>
            <p
              className="text-xl navbar-text text-left font-normal text-green-900 mt-5 dark:text-dark-green-light"
              data-aos="flip-down"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Computer & Systems Engineering student at Universidad Nacional de
              Colombia, React.js frontend developer, Python IA/ML/DataScience
              Developer.
            </p>
            <div
              className="flex languages mt-5 "
              data-aos="flip-down"
              data-aos-delay="450"
              data-aos-duration="1000"
            >
              <div className="es">
                <img
                  src="/flags/spain.png"
                  alt="esp"
                  className="h-6 w-6 mr-3"
                />
              </div>
              <div className="en">
                <img
                  src="/flags/united-states.png"
                  alt="eng"
                  className="h-6 w-6 mr-3"
                />
              </div>
              <div className="fr">
                <img
                  src="/flags/france.png"
                  alt="fran"
                  className="h-6 w-6 mr-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full flex items-center justify-center relative xl:col-span-1 col-span-full "
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <img
            src="https://cdn.dribbble.com/users/3735549/screenshots/14353014/media/e06f742ed3451a1e4696f29de4a62eef.png"
            alt="landing_img"
            className="rounded-2xl xl:block hidden "
          />
          <div className="flex items-center my-16 xl:absolute xl:-bottom-40 xl:-left-10 w-full">
            <div className="flex bg-white h-48 rounded-lg xl:max-w-lg shadow-inner dark:bg-dark-green-light ">
              <div className="flex-none w-32 xl:w-48 relative ">
                <img
                  src="/profile.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-tl-md rounded-bl-md"
                />
              </div>
              <div className="flex flex-col flex-auto p-4 xl:p-6 items-center w-4/5">
                <div className="text-left h-auto mb-5 ">
                  <p className="flex-auto text-xl font-semibold navbar-text text-green-900">
                    <span className="fpage-writing ">
                      {showLetters}
                      <span className="dark:border-white">&#160;</span>
                    </span>
                    developer
                  </p>

                  <div className="w-full flex-none text-sm font-medium text-green-800 mt-2">
                    <p className="navbar-text">
                      Learning something new everyday 🚀{" "}
                    </p>
                  </div>
                </div>
                <div className="flex text-sm font-medium h-10 w-full animate-pulse">
                  <div className="flex-auto flex space-x-3">
                    <a
                      className="w-full flex items-center justify-center rounded-md bg-green-500 text-white ring-4 ring-green-300 ring-opacity-50 dark:bg-dark-green-primary"
                      type="submit"
                      href={process.env.PUBLIC_URL + "/angel_cv.pdf"}
                      download="Angel Gonzalez [CV]"
                    >
                      <p className="navbar-text">Download my CV!</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:block hidden absolute bottom-20 right-14">
            <div className="flex flex-col">
              <Icon.Linkedin
                className="h-7 mb-4 w-7 cursor-pointer"
                color="white"
                size={10}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/angel-mateo-gonzalez-83a610196/",
                    "_blank"
                  )
                }
              />
              <Icon.GitHub
                className="h-7 mb-4 w-7 cursor-pointer"
                color="white"
                onClick={() =>
                  window.open("https://github.com/angegonzalez", "_blank")
                }
              />
              <Icon.Mail
                className="h-7 mb-4 w-7 cursor-pointer"
                color="white"
                onClick={() =>
                  window.open("mailto:mateogonzalez3b@hotmail.es", "_blank")
                }
              />
              <Icon.Instagram
                className="h-7 mb-4 w-7 cursor-pointer"
                color="white"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/angelgonzalez_b/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
