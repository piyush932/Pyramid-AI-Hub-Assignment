import React from 'react'
import Image1 from '../images/1.png'
import Image2 from '../images/2.png'

export default function Stage3() {
  return (
    <div className='pl-40 p-10'>
        <div >
            <h1 className='text-5xl text-gray-300 font-thin'>Main Focus/Mission Statement</h1>
        </div>
        <div className='flex '>
            <div className='p-10 flex flex-row'>
              <img src={Image1} alt="image1" />
              <p className='text-2xl pl-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
              </p>
            </div>
            <div className='p-10 flex flex-row'>
              <img src={Image2} alt="image2" />
              <p className='text-2xl pl-10 pr-20'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
              </p>
            </div>
        </div>
    </div>
  )
}
