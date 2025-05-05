const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>RATCHAPHON</p>

        <div className="social-links">
          <ul>
            <a href="mailto:ohm.ratchaphon@gmail.com" target="_blank">
              <img src="/icons/email.png" alt="Email_Icon" />
            </a>
            <a href="tel:+66989533977" target="_blank">
              <img src="/icons/tel.png" alt="Tel_Icon" />
            </a>
            <a href="https://github.com/BazkilleR" target="_blank">
              <img src="/icons/github.png" alt="Github_Icon" />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
