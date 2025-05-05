import SkillGroup from "./SkillGroup";

// Skill data
const skillSections = [
  {
    title: "Programming Language",
    skills: [
      { icon: "/icons/html.png", alt: "HTML" },
      { icon: "/icons/css.png", alt: "CSS" },
      { icon: "/icons/javascript.png", alt: "JavaScript" },
      { icon: "/icons/php.png", alt: "PHP" },
      { icon: "/icons/python.png", alt: "Python" },
      { icon: "/icons/java.png", alt: "Java" },
      { icon: "/icons/sql.png", alt: "SQL" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { icon: "/icons/react.png", alt: "React" },
      { icon: "/icons/tailwind.png", alt: "Tailwind" },
      { icon: "/icons/bootstrap.png", alt: "Bootstrap" },
      { icon: "/icons/flask.png", alt: "Flask" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: "/icons/github.png", alt: "Github" },
      { icon: "/icons/postman.png", alt: "Postman" },
      { icon: "/icons/hostinger.png", alt: "Hostinger" },
      { icon: "/icons/vercel.png", alt: "Vercel" },
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
