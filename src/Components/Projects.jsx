import React, { useRef } from "react";
import "../Styles/Projects.css";
import ProjectCard from "./ProjectCard";
import * as Icon from "react-feather";

const Projects = (props) => {
  const itemsRef = useRef([]);
  const buttonsRef = useRef([]);
  const myRef = useRef(null);
  const [actualIndex, setactualIndex] = React.useState(0);
  const [actualPosition, setactualPosition] = React.useState(0);

  // const wait = async (ms) => {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, ms);
  //   });
  // };

  const executeScroll = (ref, index) => {
    // console.log(myRef.current.scrollLeft);
    // setactualIndex(index);
    ref.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };
  // const renderCarrousel = async () => {
  //   while (true) {
  //     if (buttonsRef.current.length !== 0) {
  //       for (const el of buttonsRef.current) {
  //         el.click();
  //         await wait(1000);
  //       }
  //     }
  //   }
  // };
  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, props.items.length);
    buttonsRef.current = buttonsRef.current.slice(0, props.items.length);
  });
  // console.log(window.scrollY);
  // console.log(window.screen.height);

  return (
    <div
      className="h-screen flex items-start px-5 xl:px-36 bg-gray-50 dark:bg-dark-green-dark "
      id="projects"
    >
      <div className="flex flex-col xl:grid xl:grid-cols-2 h-screen w-full">
        <div className="flex flex-col col-span-1 items-start justify-center mt-16 xl:mt-0">
          <div className="section-pr h-100 w-100 " data-aos="fade-up">
            <p className="text-md font-semibold text-green-700 navbar-text dark:text-dark-green-light">
              My projects
            </p>
          </div>
          <p
            className="text-4xl xl:text-6xl font-semibold text-green-900 navbar-text text-left mt-5 max-w-lg dark:text-dark-green-light"
            data-aos="fade-up"
          >
            Look at my developed projects
          </p>
          <small
            className="text-lg navbar-text text-green-900 navbar-text text-left mt-3 xl:mt-10 max-w-xs dark:text-dark-green-light"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Academic & Professional web and mobile applications
          </small>
        </div>
        <div
          className="flex flex-col col-span-1 items-center justify-center rounded xl:mt-0 mt-5"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div
            ref={myRef}
            className="flex overflow-x-scroll scrollbar-hide xl:mt-0 w-full mb-3 xl:w-4/5 xl:h-3/5 xl:p-10 p-2"
            vertical={false}
            onScroll={(e) => {
              const scrollPosition = myRef.current.scrollLeft;
              console.log(actualIndex);
              if (scrollPosition > actualPosition) {
                if (
                  scrollPosition >
                    (actualIndex + 1) * myRef.current.clientWidth - 50 &&
                  scrollPosition <
                    (actualIndex + 2) * myRef.current.clientWidth - 50
                ) {
                  setactualIndex(actualIndex + 1);
                }
              } else {
                if (
                  myRef.current.scrollLeft <
                  (actualIndex - 1) * myRef.current.clientWidth + 150
                ) {
                  setactualIndex(actualIndex - 1);
                }
              }
              setactualPosition(scrollPosition);
            }}
          >
            {props.items.map((project, i) => {
              return (
                <div
                  className="flex flex-col flex-shrink-0 w-full xl:h-full bg-white rounded-3xl relative hover:shadow-bt mr-20 cursor-pointer dark:bg-dark-green-light"
                  key={i}
                  ref={(el) => (itemsRef.current[i] = el)}
                  onClick={() => {
                    //https://modest-chandrasekhar-9dd1a6.netlify.app/
                    if (project.link) {
                      window.open(project.link, "_blank");
                    }
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    img={project.img}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex items-center h-auto">
            {props.items.map((el, i) => {
              if (actualIndex === i) {
                return (
                  <div
                    ref={(el) => (buttonsRef.current[i] = el)}
                    key={i}
                    onClick={() => executeScroll(itemsRef.current[i], i)}
                  >
                    <Icon.Circle
                      size="12"
                      color="#064E3B"
                      className="mr-2 cursor-pointer"
                    />
                  </div>
                );
              }

              return (
                <div ref={(el) => (buttonsRef.current[i] = el)} key={i}>
                  <Icon.Circle
                    size="10"
                    color="grey "
                    className="mr-2 cursor-pointer"
                    onClick={() => executeScroll(itemsRef.current[i], i)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
