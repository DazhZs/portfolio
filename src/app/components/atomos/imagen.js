import NextImage from 'next/image'

const Image = ({ src, className, width, height, alt }) => {
  return (
    <NextImage src={src} className={className} width={width} height={height} alt={alt} />
  )
}

export default Image
