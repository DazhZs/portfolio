import Icon from '../atomos/icono'
import Paragraph from '../atomos/parrafo'

const SkillCard = ({ iconClassName, skillName }) => {
  return (
    <div className={`skill-card ${skillName}`}>
      <Icon className={`fa-brands ${iconClassName} ${skillName}-icon`} />
      <Paragraph>{skillName}</Paragraph>
    </div>
  )
}

export default SkillCard
