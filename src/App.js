import "./App.css";
import NavBar from "./Components/NavBar";
import Principal from "./Components/Principal";
import Overview from "./Components/Overview";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import projects from "./Data/projects.json";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Principal />
      <Overview />
      <Projects items={projects.projects} />
      <Footer />
    </div>
  );
}

export default App;
