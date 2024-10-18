import PageHeader from '@/components/common/page-header'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: "About",
  description: "You can buy anything here",
};

const AboutPage = () => {
  // throw new Error('Something went wrong!')
  return (
    <div>
      <PageHeader title="About" />
      AboutPage

      <Image src="https://picsum.photos/200/300" alt="img" width={200} height={300} />
    </div>
  )
}

export default AboutPage