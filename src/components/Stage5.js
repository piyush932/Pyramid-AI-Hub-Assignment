import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Textarea } from 'flowbite-react'
import Image12 from '../images/image 12.png'

export default function SignUp() {
  return (
    <div className='mt-10 '>
      <div className='flex p-3 max-w-6xl mx-auto flex-col md:flex-row md:items-center gap-5'>
    {/* right */}
    <div className='flex-1 '>
        <h1 className='text-5xl text-gray1 pb-10'>Contact Us</h1>
      <form className='flex flex-col gap-4 '>
        <div >
        <Label/>
          <TextInput
          type='text'
          placeholder='Name'
          id='username'
          />

        </div>
        <div>
        <Label/>
          <TextInput
          type='text'
          placeholder='Phone Number'
          id='phoneNumber'
          />

        </div>
        <div>
        <Label/>
          <TextInput
          type='text'
          placeholder='E-mail'
          id='email'
          />

        </div>
        <div>
        <Label/>
          <TextInput
          type='text'
          placeholder='Intersested In'
          id='interested'
          />
        </div>
        <Textarea
            placeholder='Message'
            rows='5'
            maxLength='200'
          />
        <Button className="bg-black text-white rounded p-5">
          Send Email{" "}
          <svg
            className="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"  
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path   
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </Button>
      </form>
    </div>
       {/* left */}
       <div className='flex-2 pr-5'>
    <img src={Image12} alt='image12' className='w-full h-full'/>
    </div>
      </div>
    </div>
  )
}