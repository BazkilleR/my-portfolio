import ProjectTech from "./ProjectTech";

const ProjectCard = (props) => {
  console.log([props.techStack]);

  return (
    <div className="project-card">
      <img className="card-thumnail" src={props.imgURL} alt="thumbnail" />
      <div className="project-info">
        <div className="project-title">
          <h3>{props.name}</h3>
          <a href={props.githubLink} className="external-link" target="_blank">
            <img src="/icons/external_link.png" alt="External_Link_Icon" />
          </a>
        </div>
        <p className="project-descr">{props.descr}</p>
        <div className="project-tech">
          {props.techStack.map((tech, index) => (
            <ProjectTech key={index} techName={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
