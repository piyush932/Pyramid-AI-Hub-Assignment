import { Button } from 'flowbite-react'
import React from 'react'
import image14 from '../images/image 14.png'

export default function Contacts() {
  return (
    <div className='flex  p-20 pl-40 '>
      <div className='flexbox'>
      <div>
        <h1 className='text-5xl text-gray-300'>Contact</h1>
        <span className='text-5xl font-bold'>Information</span>
      </div>
      <div className='pt-10'>
        <h1 className=' text-black font-bold'>Company Name</h1>
        <span className='text-gray1 '>1234 Sample Street Austin Texas 76401</span>
      </div>
      <div className='pt-10'>
        <h1 className=' text-black font-bold'>512.333.2222</h1>
      </div>
      <div className='pt-10'>
      <span className='text-gray1 '>sampleemail@gmail.com</span>
      </div>
      <div className='pt-5'>
      <Button className='bg-black text-white rounded p-5 '>CONTACT US</Button>
      </div>
      </div>
      <div className='pl-20 flexbox'>
        <img src={image14} alt='image14'/>
        </div>
    </div>
  )
}
