import Image from 'next/image'

const AboutImage = () => {
  return (
    <div className="about-img">
      <Image src='/images/about.jpg' className="profile-img" width={300} height={500}/>
    </div>
  )
}

export default AboutImage
