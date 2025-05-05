const SkillItem = ({ icon, alt }) => {
  return (
    <li className="skill">
      <img src={icon} alt={alt} />
    </li>
  );
};

export default SkillItem;
