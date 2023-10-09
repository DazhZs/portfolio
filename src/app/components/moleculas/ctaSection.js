import Paragraph from '../atomos/parrafo'
import CTAButton from '../atomos/button'

const CtaSection = ({ href, children }) => {
  return (
    <div className="cta-section">
      <Paragraph>{children}</Paragraph>
      <CTAButton href={href}>Contactame</CTAButton>
    </div>
  )
}

export default CtaSection
