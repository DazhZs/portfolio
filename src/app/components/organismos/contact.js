import Heading from '../atomos/heading'
import Paragraph from '../atomos/parrafo'
import CtaSection from '../moleculas/ctaSection'

const Contact = () => {
  return (
    <div className="contact-container">
      <Heading>Contactame</Heading>
      <Paragraph>Si quieres que trabajemos juntos, tienes alguna pregunta o quieres que hable en tu evento,
        mi bandeja de entrada está siempre abierta. Ya sea que solo quiera saludar,
        ¡haré todo lo posible para comunicarme con usted! ¡Saludos!</Paragraph>
      <CtaSection href="mailto:example@kinsta.com"></CtaSection>
    </div>
  )
}

export default Contact
