import "./App.css";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import 'aos/dist/aos.css'; 
import React from "react";

function App() {

  const changeFavIcon = () =>{
    let icons = ['🌎', '🌈', '💥', '🥁', '🎲', '🇨🇴', '🫶🏻', '🪐', '🚀', '💻']
    let counter = 0;

    const faviconTemplate = (icon) => {
      return `
        <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
          <text y=%22.9em%22 font-size=%2290%22>
            ${icon}
          </text>
        </svg>
      `.trim();
    }
  
    function changeFavIconLoop(){
      setTimeout(() => {
        counter++;
        if (counter === icons.length){
          counter = 0;
        }
        const linkForFavicon = document.querySelector(
          `head > link[rel='icon']`
        );
        const newFavicon = faviconTemplate(icons[counter])
        linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);
        changeFavIconLoop()
      }, 5000);
    }
    changeFavIconLoop();
  }

  React.useEffect(() => {
    changeFavIcon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
