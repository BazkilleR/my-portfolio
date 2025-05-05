import ProjectTech from "./ProjectTech";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img className="card-thumnail" src="/hitler.jpg" alt="thumnail" />
      <div className="project-info">
        <div className="project-title">
          <h3>Project Name</h3>
          <a href="#" className="external-link">
            <img src="/icons/external_link.png" alt="External_Link_Icon" />
          </a>
        </div>
        <p className="project-descr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          impedit, rerum sed similique atque repellendus!
        </p>
        <div className="project-tech">
          <ProjectTech techName="HTML" />
          <ProjectTech techName="CSS" />
          <ProjectTech techName="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
