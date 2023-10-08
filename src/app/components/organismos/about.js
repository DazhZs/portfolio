import Image from 'next/image'

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          Como desarrollador, siempre me ha apasionado crear soluciones elegantes y efectivas a problemas complejos.
          Tengo una base sólida en el desarrollo de software, con un enfoque en tecnologías web como HTML, CSS y JavaScript.
          Disfruto trabajando tanto en el front-end como en el back-end de las aplicaciones, y siempre estoy buscando formas de optimizar el rendimiento,
          mejorar la experiencia del usuario y garantizar el más alto nivel de calidad del código.
          </p>
          <p>A lo largo de mi carrera, he trabajado en una amplia gama de proyectos, desde simples sitios web estáticos hasta complejas aplicaciones de nivel empresarial.
            Tengo experiencia en trabajar con una variedad de herramientas y marcos de desarrollo, incluidos React, Angular, Vue.js, Node.js y Laravel.
            Siempre estoy ansioso por aprender y explorar nuevas tecnologías, y estoy constantemente buscando oportunidades para mejorar mis habilidades y conocimientos.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About
