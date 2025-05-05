const Footer = () => {
  const socialLinks = [
    { href: "#", alt: "email-icon", img: "/icons/email.png" },
    { href: "#", alt: "tel-icon", img: "/icons/tel.png" },
    { href: "#", alt: "github-icon", img: "/icons/github.png" },
  ];

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
      </div>
    </footer>
  );
};

export default Footer;
