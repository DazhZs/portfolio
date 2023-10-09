import Logo from '../moleculas/logo'
import CTAButton from '../atomos/button'

const Navbar = () => {
  return (
    <div className="nav-container">
      <Logo />
      <CTAButton href="mailto:example@kinsta.com">Contactame</CTAButton>
    </div>
  )
}

export default Navbar
