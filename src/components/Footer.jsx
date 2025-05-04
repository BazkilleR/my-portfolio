const Footer = () => {
  const socialLinks = [
    { href: "#", alt: "email-icon", img: "#" },
    { href: "#", alt: "tel-icon", img: "#" },
    { href: "#", alt: "github-icon", img: "#" },
  ];

  const navItems = ["HOME", "SKILLS", "PROJECT", "EXPERIENCE"];

  return (
    <footer>
      <div className="footer-content">
        <p>RATCHAPHON</p>

        <div className="social-links">
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>
                  <img src={link.img} alt={link.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer-nav">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
