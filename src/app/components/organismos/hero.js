import Image from '../atomos/imagen'
import HeroText from '../moleculas/heroText'
import SocialIcon from './socialIcon'

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <HeroText />
      <SocialIcon/>
    </div>
  )
}

export default Hero
