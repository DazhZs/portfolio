import AboutText from '../moleculas/aboutText'
import ProfileImage from '../moleculas/aboutImage'

const About = () => {
  return (
    <div className="about-container">
      <h2>Sobre Mi</h2>
      <div className="flex-about">
        <AboutText />
        <ProfileImage />
      </div>
    </div>
  )
}

export default About
