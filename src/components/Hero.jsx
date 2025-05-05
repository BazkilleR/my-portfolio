const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="sub-hero">Hi, I’m</p>
          <h1 className="hero-name gradient-purple">Ratchaphon Khawkhiew</h1>
          <h2 className="sub-hero">I’m a Full-Stack Developer.</h2>
          <p className="hero-description">
            I am a full-stack developer with a passion for creating dynamic and
            responsive web applications. I have experience in both front-end and
            back-end development, and I am always eager to learn new
            technologies and improve my skills.
          </p>
          <div className="hero-contacts">
            <a
              href="https://drive.google.com/file/d/1vpEB8iUWMB6zYPb9iBrDYfnTfkQ7OX19/view?usp=drive_link"
              target="_blank"
              className="resume-btn"
            >
              View Resume
            </a>
            <div className="hero-contacts-icons">
              <a href="#" target="_blank">
                <img src="/icons/email.png" alt="Email_Icon" />
              </a>
              <a href="#" target="_blank">
                <img src="/icons/tel.png" alt="Tel_Icon" />
              </a>
              <a href="https://github.com/BazkilleR" target="_blank">
                <img src="/icons/github.png" alt="Github_Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="/hitler.jpg" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
