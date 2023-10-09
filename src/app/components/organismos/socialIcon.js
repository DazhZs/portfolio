import SocialIcon from '../moleculas/iconoSocial'

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <SocialIcon
        href="https://twitter.com/olawanle_joel"
        ariaLabel="Twitter"
        iconClassName="fa-brands fa-twitter"
      />
      <SocialIcon
        href="https://github.com/olawanlejoel"
        ariaLabel="GitHub"
        iconClassName="fa-brands fa-github"
      />
      <SocialIcon
        href="https://www.linkedin.com/in/olawanlejoel/"
        ariaLabel="LinkedIn"
        iconClassName="fa-brands fa-linkedin"
      />
    </div>
  )
}

export default SocialIcons
