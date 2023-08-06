import React from 'react'
import image from '../assets/image.jpg'
const Hero = () => {
  return (
    <section className='bg-primary text-white'>
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info">
            <h1 className='text-6xl text-center'>Hi,<br/>
            I am <span className='cursive text-'>Pallav Goyal</span></h1>
        </div>
        <div className="hero-img"><img src={image} alt='no image' className='w-[60%] ml-auto'></img></div>
        </div>
    </section>
  )
}
export default Hero