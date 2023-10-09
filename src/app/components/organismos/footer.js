import Paragraph from '../atomos/parrafo'

const Footer = () => {
  return (
      <>
        <hr/>
        <div className="footer-container">
          <Paragraph>
            © {new Date().getFullYear()} Alejandro Portfolio
          </Paragraph>
        </div>
      </>
  )
}

export default Footer
