import React from 'react'
import { CONTACT } from '../constants'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h2 className='my-20 text-4xl text-center font-bold text-white'>Get in Touch</h2>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.number}</p>
        <p className='my-4'>{CONTACT.email}</p>
      </div>
    </div>
  )
}

export default Contact
