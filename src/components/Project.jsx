import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="project-section">
      <div className="project-content">
        <div className="headline-container">
          <h2 className="headline gradient-purple">Projects</h2>
        </div>
        <div className="project-container">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Project;
