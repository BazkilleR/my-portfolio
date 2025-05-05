import SkillItem from "./SkillItem";

const SkillGroup = ({ title, skills }) => {
  return (
    <div className="skill-group">
      <h3 className="sub-headline">{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <SkillItem key={index} icon={skill.icon} alt={skill.alt} />
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;
