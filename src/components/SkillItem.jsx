const SkillItem = ({ icon, alt }) => {
  return (
    <li className="skill">
      <img src={icon} alt={alt} />
      <p>{alt}</p>
    </li>
  );
};

export default SkillItem;
