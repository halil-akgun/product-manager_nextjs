import { wait } from '@/utils/misc'
import Image from 'next/image';
import React from 'react'

const ContactPage = async () => {
  await wait(2000);
  return (
    <div>
      ContactPage
      <div style={{ height: '500px', width: '500px', position: 'relative' }}>
        <Image src="https://picsum.photos/900/700" alt="img"
          fill // Using fill ensures the image automatically scales to fit the container's dimensions without needing explicit width and height
          style={{ objectFit: 'cover', objectPosition: 'center' }} // objectFit ensures the image maintains its aspect ratio while covering the entire container, and objectPosition centers the image within the space
        />
      </div>
    </div>
  )
}

export default ContactPage