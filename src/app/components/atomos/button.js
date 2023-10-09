const Button = ({ href, children }) => {
  return (
    <a href={href} className='cta-btn'>{children}</a>
  )
}

export default Button
