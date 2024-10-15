import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  // throw new Error('Something went wrong!')
  return (
    <div>
      AboutPage

      <Image src="https://picsum.photos/200/300" alt="img" width={200} height={300} />
    </div>
  )
}

export default AboutPage