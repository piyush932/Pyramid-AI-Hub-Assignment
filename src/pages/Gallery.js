import React from 'react'
import Rectangle22 from '../images/Rectangle 22.png'
import Rectangle23 from '../images/Rectangle 23.png'
import Rectangle24 from '../images/Rectangle 24.png'
import Rectangle25 from '../images/Rectangle 25.png'
import Rectangle26 from '../images/Rectangle 26.png'
import Rectangle27 from '../images/Rectangle 27.png'
import Rectangle28 from '../images/Rectangle 28.png'
import Rectangle29 from '../images/Rectangle 29.png'
import Rectangle30 from '../images/Rectangle 30.png'
import Rectangle31 from '../images/Rectangle 31.png'
import Arrows from '../components/Arrows'

export default function Gallery() {
  return (
    <div className='flexbox p-20 pr-5'>
      <div className='pl-20 pb-10'>
        <h1 className='text-3xl text-gray1'>Photo</h1>
        <span className='text-5xl text-customBlack'>Gallery</span>
      </div>
      <div className='flex gap-6 flex-row flex-wrap pl-20'>
        <img src={Rectangle22} alt="Rectangle22" />
        <img src={Rectangle23} alt="Rectangle23" />
        <img src={Rectangle24} alt="Rectangle24" />
        <img src={Rectangle25} alt="Rectangle25" />
        <img src={Rectangle26} alt="Rectangle26" />
        <img src={Rectangle27} alt="Rectangle27" />
        <img src={Rectangle28} alt="Rectangle28" />
        <img src={Rectangle29} alt="Rectangle29" />
        <img src={Rectangle30} alt="Rectangle30" />
        <img src={Rectangle31} alt="Rectangle31" />
      </div>
      <div>
        <Arrows/>
      </div>
    </div>
  )
}
