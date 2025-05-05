import SkillGroup from "./SkillGroup";

// Skill data
const skillSections = [
  {
    title: "Programming Language",
    skills: [
      { icon: "/icons/html.png", alt: "HTML_Icon" },
      { icon: "/icons/css.png", alt: "CSS_Icon" },
      { icon: "/icons/javascript.png", alt: "JavaScript_Icon" },
      { icon: "/icons/php.png", alt: "PHP_Icon" },
      { icon: "/icons/python.png", alt: "Python_Icon" },
      { icon: "/icons/java.png", alt: "Java_Icon" },
      { icon: "/icons/sql.png", alt: "SQL_Icon" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { icon: "/icons/react.png", alt: "React_Icon" },
      { icon: "/icons/tailwind.png", alt: "Tailwind_Icon" },
      { icon: "/icons/bootstrap.png", alt: "Bootstrap_Icon" },
      { icon: "/icons/flask.png", alt: "Flask_Icon" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: "/icons/github.png", alt: "Github_Icon" },
      { icon: "/icons/postman.png", alt: "Postman_Icon" },
      { icon: "/icons/hostinger.png", alt: "Hostinger_Icon" },
      { icon: "/icons/vercel.png", alt: "Vercel_Icon" },
    ],
  },
];

const Skill = () => {
  return (
    <section className="skill-section">
      <div className="skill-content">
        <div className="headline-container">
          <h2 className="headline gradient-purple">My Skills</h2>
        </div>
        {skillSections.map((section, index) => (
          <SkillGroup
            key={index}
            title={section.title}
            skills={section.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skill;
