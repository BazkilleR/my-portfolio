import ProjectTech from "./ProjectTech";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img src="#" alt="thumnail" />
      <div className="project-content">
        <div className="project-title">
          <h3>Project Name</h3>
          <img src="#" alt="External_Link_Icon" />
        </div>
        <p className="project-descr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          impedit, rerum sed similique atque repellendus!
        </p>
      </div>
      <div className="project-tech">
        <ProjectTech techName="HTML" />
        <ProjectTech techName="CSS" />
        <ProjectTech techName="JavaScript" />
      </div>
    </div>
  );
};

export default ProjectCard;
