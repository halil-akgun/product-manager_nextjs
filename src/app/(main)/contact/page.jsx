import { wait } from '@/utils/misc'
import Image from 'next/image';
import React from 'react'
import logo from '../../../../public/images/logo.png'
import PageHeader from '@/components/common/page-header';

export const metadata = {
  title: "Contact",
  description: "You can buy anything here",
};

const ContactPage = async () => {
  await wait(2000);
  return (
    <div>
      <PageHeader title="Contact" />
      ContactPage
      <div style={{ height: '500px', width: '500px', position: 'relative' }}>
        <Image src="https://picsum.photos/900/700" alt="img"
          fill // Using fill ensures the image automatically scales to fit the container's dimensions without needing explicit width and height
          style={{ objectFit: 'cover', objectPosition: 'center' }} // objectFit ensures the image maintains its aspect ratio while covering the entire container, and objectPosition centers the image within the space
        />
      </div>
      <Image src={logo} alt="logo" /> {/* when we use import, we don't have to set width and height. */}
    </div>
  )
}

export default ContactPage