import { wait } from '@/utils/misc'
import React from 'react'

const ContactPage = async () => {
  await wait(2000);
  return (
    <div>ContactPage</div>
  )
}

export default ContactPage