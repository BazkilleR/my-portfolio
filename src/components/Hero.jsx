const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>Hi, I’m</p>
        <h1>Ratchaphon Khawkhiew</h1>
        <h2>I’m a Full-Stack Developer.</h2>
        <p>
          I am a full-stack developer with a passion for creating dynamic and
          responsive web applications. I have experience in both front-end and
          back-end development, and I am always eager to learn new technologies
          and improve my skills.
        </p>
      </div>
      <div className="contacts">
        <a href="" className="button">
          View Resume
        </a>
        <a>
          <img src="./#" alt="Email_Icon" />
        </a>
        <a>
          <img src="./#" alt="Tel_Icon" />
        </a>
        <a>
          <img src="./#" alt="Github_Icon" />
        </a>
      </div>
      <div className="hero-image">
        <img src="#" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
