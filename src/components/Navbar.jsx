import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="nav-content">
        <div className="nav-logo">PORTFOLIO</div>
        <div className="hamburger" onClick={toggleMenu}>
          <img src="/icons/burger_nav.png" alt="burger_nav" />
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECT</a>
            </li>
            <li>
              <a href="#experience">EXPERIENCE</a>
            </li>
            <li>
              <a href="#education">EDUCATION</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`mobile-nav-menu ${showMenu ? "show" : ""}`} id="navMenu">
        <ul>
          <li>
            <a href="#">
              <div className="mb-nav">HOME</div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="mb-nav">SKILLS</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="mb-nav">PROJECT</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="mb-nav">EXPERIENCE</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
