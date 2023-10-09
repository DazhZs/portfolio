import Icon from '../atomos/icono'

const SocialIcon = ({ href, ariaLabel, iconClassName }) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={iconClassName} />
    </a>
  )
}

export default SocialIcon
