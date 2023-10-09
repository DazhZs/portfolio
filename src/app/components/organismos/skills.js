import SkillCard from '../moleculas/skillCard'

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <SkillCard iconClassName="fa-html5" skillName="HTML" />
        <SkillCard iconClassName="fa-css3-alt" skillName="CSS" />
        <SkillCard iconClassName="fa-js-square" skillName="JavaScript" />
        <SkillCard iconClassName="fa-react" skillName="React" />
        <SkillCard iconClassName="fa-node-js" skillName="Node" />
        <SkillCard iconClassName="fa-python" skillName="Python" />
      </div>
    </div>
  )
}

export default Skills
