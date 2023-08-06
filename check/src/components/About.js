import React from 'react'

const About = () => {
  return (
    <section id='About' className='bg-primary text-white'>
    <div className="px-3 container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
    <div className="about-info">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">About me</h2>
        <p className='py-5'>Myself Pallav Goyal. I am presently pursuing my B.Tech in Computer Science and Engineering at IIT Kanpur as a second year student. I have keen interest in Web Development and Machine Learning. I am a Web Secretary at PPOC.</p>
    </div>
    </div>
</section>
  )
}
export default About