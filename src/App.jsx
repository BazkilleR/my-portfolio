import "./App.css";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Project.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Project />
      <div>
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;
