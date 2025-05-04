import "./App.css";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Skill from "./components/Skill.jsx";

function App() {
  return (
    <div>
      <section className="hero-section">
        <Navbar />
        <Hero />
      </section>
      <section className="skill">
        <Skill />
      </section>
    </div>
  );
}

export default App;
