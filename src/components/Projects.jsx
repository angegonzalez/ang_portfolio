import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-mirage-initial to-mirage-final h-auto p-10" >
      <div className="flex w-full justify-between lg:px-16 mb-10 lg:mb-0 items-center">
        <div className="flex flex-col">
          <p className="font-bold text-2xl md:text-4xl lg:text-5xl  text-left leading-none   text-dark-green-light" name="projects">
            Developed projects 🚀
          </p>
          <div className="h-1 w-16" style={{ backgroundColor: "white" }}></div>
        </div>
        <div className="xl:h-52 xl:w-52 flex md:w-36 md:h-36 w-20 h-20">
        <img src='/assets/Saly-25.svg' alt="" className="self-center"/>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 flex flex-col">
      <div className="lg:col-span-1 lg:row-span-1 flex justify-center items-center ">
          <div
            className="lg:rounded-3xl w-full lg:mx-16 backdrop-blur-sm bg-purple-700/20 h-auto p-8"
            data-aos="zoom-out" data-aos-duration="500"
          >
            <div className="flex w-auto flex-col">
                <p className="font-bold text-xl xl:text-2xl 2xl:text-4xl text-left leading-none   text-dark-green-light">
                  Skillsly (Microservices)
                </p>
                <div className="flex flex-wrap gap-1 my-2">
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Software Architecture</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Microservices</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Fullstack Development</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Mobile Development</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Software Project Management</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">DevOps</span>
                </div>
                <br/>
                <p className="  text-dark-green-light text-left">
                  I developed with my teammates a social network called Skillsly. A platform that helps people to connect with others offering services based in their talents and skills. <br />
                  We try to offer a variety of functionalities using microservices and we did all the architectural stuff.
                </p>
                <p className="  text-dark-green-light text-left">
                  You can visit repos for know more :<br /><br />
                </p>
                <ul className="  text-dark-green-light text-left">
                    <li><a href="https://bitbucket.org/jonathanlop07/skillsly-backend/src/main/"><b>Skillsly backend (microservices)</b></a></li>
                    <li><a href="https://bitbucket.org/jonathanlop07/skillsly-frontend/src/development/"><b>Skillsly frontend (web app)</b></a></li>
                    <li><a href="https://bitbucket.org/jonathanlop07/skillsly-mobile/src/development/"><b>Skillsly frontend (mobile app)</b></a></li>
                </ul>
              </div>
          </div>
      </div>
      <div className="lg:col-span-1 lg:row-span-1 flex justify-center items-center ">
          <div
            className="lg:rounded-3xl w-full lg:mx-16 backdrop-blur-md bg-violet-700/20 h-auto p-8"
            data-aos="zoom-out" data-aos-duration="500"
          >
            <div className="flex w-auto flex-col">
                <p className="font-bold text-xl xl:text-2xl 2xl:text-4xl text-left leading-none   text-dark-green-light">
                  Skillsly (Monolith)
                </p>
                <div className="flex flex-wrap gap-1 my-2">
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Software Development</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Agile</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Project Pitch</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Software Project Management</span>
                </div>
                <br/>
                <p className="  text-dark-green-light text-left">
                  With my teammates we define the Skillsly project that allows people to connect based in their skills and talents. <br/>
                  We defined brand, functionalities and all the components of the software project. <br/>
                  We try to develop a functional application using the SCRUM agile framework.
                </p>
                <p className="  text-dark-green-light text-left">
                  You can visit repos for know more :<br /><br />
                </p>
                <ul className="  text-dark-green-light text-left">
                    <li><a href="https://bitbucket.org/darkukeo/skillsly-backend/src/development/"><b>Skillsly backend (monolith)</b></a></li>
                    <li><a href="https://bitbucket.org/darkukeo/skillsly-frontend/src/development/"><b>Skillsly frontend (web app)</b></a></li>
                </ul>
              </div>
          </div>
      </div>
      <div className="lg:col-span-1 lg:row-span-1 flex justify-center items-center lg:my-4">
          <div
            className="lg:rounded-3xl w-full lg:mx-16 backdrop-blur-lg bg-indigo-700/20 h-auto p-8"
            data-aos="zoom-out" data-aos-duration="500"
          >
            <div className="flex w-auto flex-col">
                <p className="font-bold text-xl xl:text-2xl 2xl:text-4xl text-left leading-none   text-dark-green-light">
                  PsyBrain
                </p>
                <div className="flex flex-wrap gap-1 my-2">
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Software Development</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Agile</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Project Pitch</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Mobile Development</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Machine Learning</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Artificial Intelligence</span>
                </div>
                <br/>
                <p className="  text-dark-green-light text-left">
                  With my teammates we want to offer a service in the COVID-19 lockdown, helping people in terms of the mental health. <br/>
                  For us was important to provide people a source to connect with professional support and detecting possible mental issues due to the lockdown <br/>
                  We used a Machine Learning model to analyze text sentiments and offer people accurate support through a chat messaging app
                </p>
                <p className="  text-dark-green-light text-left">
                  You can visit repo for know more :<br /><br />
                </p>
                <ul className="  text-dark-green-light text-left">
                    <li><a href="https://github.com/Rguarnizo/PsyBrain"><b>PsyBrain (mobile app)</b></a></li>
                </ul>
              </div>
          </div>
      </div>
      <div className="lg:col-span-1 lg:row-span-1 flex justify-center items-center ">
          <div
            className="lg:rounded-3xl w-full lg:mx-16 backdrop-blur-md bg-blue-700/20 h-auto p-8"
            data-aos="zoom-out" data-aos-duration="500"
          >
            <div className="flex w-auto flex-col">
                <p className="font-bold text-xl xl:text-2xl 2xl:text-4xl text-left leading-none   text-dark-green-light">
                  Poptr
                </p>
                <div className="flex flex-wrap gap-1 my-2">
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Software Development</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Data Structures</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Project Pitch</span>
                <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-purple-200 text-purple-900">Web Development</span>
                </div>
                <br/>
                <p className="  text-dark-green-light text-left">
                  My first project created from scratch! <br></br>
                  I wanted to create an application for manage formalities in the Colombian social context <br></br>
                  I tried to apply different concepts of Data Structures to give support in formalities administration.
                </p>
                <p className="  text-dark-green-light text-left">
                  You can visit repo for know more :<br /><br />
                </p>
                <ul className="  text-dark-green-light text-left">
                    <li><a href="https://github.com/angegonzalez/Poptr"><b>Poptr (web app)</b></a></li>
                </ul>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;