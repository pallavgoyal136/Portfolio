import React from 'react'

const Projects = () => {
  return (
    <section id='Projects' className='bg-primary text-white'>
    <div className="px-3 container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
    <div className="about-info">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">Projects</h2>
        <li>Performing Sentiment analysis through NLP</li>
        <li>Predicting Sequential Data through Transformers</li>
        <li>Implementing Mathematical Trading strategies</li>
        <li> <a href='https://github.com/pallavgoyal136'>Github Profile</a></li>
    </div>
    </div>
</section>
  )
}
export default Projects