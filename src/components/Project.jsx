import ProjectCard from "./ProjectCard";

const projectData = {
  Portfolio: {
    imgURL: "/projectImage/portfolio.png",
    name: "Portfolio - Ratchaphon Khawkhiew",
    descr:
      "Designed and developed my portfolio using React, starting with UI/UX mockups in Figma. Focused on responsive layout, smooth user experience, and clean code structure to showcase projects effectively.",
    githubLink: "https://github.com/BazkilleR/my-portfolio/tree/main",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
  },
  SiamDino: {
    imgURL: "/projectImage/siamdino.png",
    name: "SiamDino - 2D Pixel Tycoon Game",
    descr:
      "Developed core gameplay for a 2D pixel zoo tycoon, including hunger-based animal feeding, NPC pathfinding, random visitor movement, and upgrade systems for shops and animals to enhance progression.",
    githubLink: "https://github.com/BazkilleR",
    techStack: ["Java"],
  },
  Muscal: {
    imgURL: "/projectImage/muscal.png",
    name: "Muscal – Calorie Tracking Web Application",
    descr:
      "Developed Muscal’s back-end with Flask, creating RESTful APIs for authentication, food logging, and goals. Designed a MySQL schema and deployed on Heroku with key performance optimizations.",
    githubLink: "https://github.com/67070151/project-pscp-muscal",
    techStack: ["PYTHON", "Flask", "MySQL"],
  },
  tupnews: {
    imgURL: "/projectImage/tupnews.jpg",
    name: "TUP News – School News Web Application",
    descr:
      "Developed a CRUD-based school news platform with PHP, MySQL, and Bootstrap. Built admin panel for content management, enabling article and user handling. Deployed on Hostinger for public access and updates.",
    githubLink: "https://github.com/BazkilleR/TUPNEWS",
    techStack: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
  },
  sharegreenth: {
    imgURL: "/projectImage/sharegreenth.jpg",
    name: "sharegreenth.online - Art Competition Web Application",
    descr:
      "Developed a website using Tailwind CSS for a speech contest in celebration of Thai Environment Day 2023. Responsible for full-stack development, ensuring a responsive and engaging user experience for participants.",
    githubLink: "https://github.com/BazkilleR/Sharegreen",
    techStack: ["HTML", "CSS", "Tailwind", "PHP", "MySQL"],
  },
  oms: {
    imgURL: "/projectImage/oms.png",
    name: "Order Management System",
    descr:
      "Developed a website using Tailwind CSS and PHP for managing order listings during the Hackathon at ToBeIT’67 The Second. Served as Fullstack Developer, creating a dynamic and user-friendly interface.",
    githubLink: "https://github.com/BazkilleR/teBeIT_project",
    techStack: ["HTML", "CSS", "Tailwind", "PHP", "MySQL"],
  },
};

const Project = () => {
  return (
    <div className="project-section" id="projects">
      <div className="project-content">
        <div className="headline-container">
          <h2 className="headline gradient-purple">Projects</h2>
        </div>
        <div className="project-container">
          {Object.values(projectData).map((project, index) => (
            <ProjectCard
              key={index}
              imgURL={project.imgURL}
              name={project.name}
              descr={project.descr}
              githubLink={project.githubLink}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
