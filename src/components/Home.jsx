import React from "react";
import * as Icon from "react-feather";
import AOS from "aos";
import RiveComponent from '@rive-app/react-canvas';
import TypewriterComponent from "typewriter-effect";

const Home = () => {
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

  React.useEffect(() => {
    AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-dark-green-dark h-auto ">
      <div className="flex lg:grid lg:grid-cols-2 justify-center ">
        <div className="w-5/6 lg:w-4/6 justify-self-center my-16 lg:col-span-1" data-aos="fade-up" data-aos-duration="1500">
            <p
              className="font-bold text-3xl xl:text-5xl text-left leading-none self-center text-dark-green-light"
            >
              Angel Mateo González Bejarano
            </p>
            <p
              className="text-md xl:text-lg navbar-text text-left font-normal mt-5 text-dark-green-light"
            >
              <br/>
              Computer & Systems Engineering student at Universidad Nacional de
              Colombia. <br/>
              Mainly interested in Software Development, Artificial Intelligence and Data Science. <br/>
              Flexible developer. I have experience developing backend and frontend, data analytics and mobile. 
            </p>
            <div
              className="flex space-x-3 mt-5 xl:text-3xl text-xl"
            >
              <div className="es">
                🇪🇸
              </div>
              <div className="en">
                🇺🇸
              </div>
              <div className="fr">
                🇫🇷
              </div>
            </div>
            <div className="flex space-x-4 xl:hidden mt-10">
              <Icon.Linkedin
                className="h-7 mb-4 w-7 cursor-pointer"
                color="white"
                size={10}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/angegonzalez/",
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
                    "https://www.instagram.com/mateogzlb/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        <div
          className="hidden w-full lg:flex items-center justify-center lg:col-span-1 "
        >
          <div className="w-5/6 h-full p-5 relative">
          <RiveComponent src='/assets/landing.riv'></RiveComponent>
          <div className="flex items-center w-full absolute -bottom-6 "
          data-aos="fade-right" data-aos-duration="1500">
            <div className="flex bg-white h-48 rounded-lg xl:max-w-lg lg:max-w-md shadow-inner bg-dark-green-light ">
              <div className="flex-none w-32 lg:w-48 relative ">
                <img
                  src="/assets/angel.jpeg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-tl-md rounded-bl-md"
                />
              </div>
              <div className="flex flex-col flex-auto p-4 xl:p-6 items-center w-4/5">
                <div className="text-left h-auto mb-5 ">
                  <p className="flex-auto text-2xl font-semibold navbar-text text-green-900">
                    <span className="fpage-writing ">
                     <TypewriterComponent options={{
                      loop: true,
                      delay: 100,
                     }} onInit={(typewriter) =>{
                        words.forEach( word =>{
                         typewriter.typeString(word + ' developer').deleteChars(word.length + 10).start();
                        })
                     }}>
                     </TypewriterComponent>
                    </span>
                  </p>
                  <div className="w-full flex-none text-md font-medium text-green-800 mt-2">
                    <p className="navbar-text">
                      Building powerful things from 🇨🇴 to the 🌎
                    </p>
                  </div>
                </div>
                <div className="flex text-sm font-medium h-10 w-full animate-pulse">
                  <div className="flex-auto flex space-x-3">
                    <a
                      className="w-full flex items-center justify-center rounded-md bg-emerald-500 text-white ring-4 ring-green-300 ring-opacity-50 bg-dark-green-primary"
                      type="submit"
                      href={process.env.PUBLIC_URL + "/angel_cv.pdf"}
                      download="Angel Gonzalez [CV]"
                    >
                      <p className="navbar-text">my cv, here!</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          <div className="xl:block hidden absolute bottom-10 right-14">
            <div className="flex flex-col" data-aos="fade-right" data-aos-duration="1500">
              <Icon.Linkedin
                className="h-7 mb-4 w-7 cursor-pointer"
                color="white"
                size={10}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/angegonzalez",
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
                    "https://www.instagram.com/mateogzlb",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-center">
      <div className="flex items-center">
            <div className="flex h-36 rounded-lg shadow-inner bg-dark-green-light ">
              <div className="flex-none w-32 xl:w-48 relative ">
                <img
                  src="/assets/angel.jpeg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-tl-md rounded-bl-md"
                />
              </div>
              <div className="flex flex-col flex-auto p-4 xl:p-6 items-center w-4/5">
                <div className="text-left h-auto mb-5 ">
                  <p className="flex-auto text-lg font-bold text-green-900">
                    <span className="fpage-writing">
                     <TypewriterComponent options={{
                      loop: true,
                      delay: 100,
                     }} onInit={(typewriter) =>{
                        words.forEach( word =>{
                         typewriter.typeString(word + ' developer').deleteChars(word.length + 10).start();
                        })
                     }}>
                     </TypewriterComponent>
                    </span>
                  </p>
                  <div className="w-full flex-none text-sm font-medium text-green-800 mt-2">
                    <p className="navbar-text">
                      Building powerful things from 🇨🇴 to the 🌎
                    </p>
                  </div>
                </div>
                <div className="flex text-xs font-medium h-10 w-full animate-pulse">
                  <div className="flex-auto flex space-x-3">
                    <a
                      className="w-full flex items-center justify-center rounded-md bg-emerald-500 text-white ring-4 ring-green-300 ring-opacity-50 bg-dark-green-primary"
                      type="submit"
                      href={process.env.PUBLIC_URL + "/angel_cv.pdf"}
                      download="Angel Gonzalez [CV]"
                    >
                      <p className="navbar-text">my cv, here!</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="flex lg:hidden justify-center">
        <div className="w-full h-96 p-5 relative">
            <RiveComponent src='/assets/landing.riv'></RiveComponent>
        </div>
      </div>
    </div>
  );
};

export default Home;
