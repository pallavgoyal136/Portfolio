import React from 'react'

const Contact = () => {
  return (
    <section id='Contact' className="bg-secondery px-5 py-32">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p className="py-2">
          <span className="font-bold">Email:</span> pallavgoyal136@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +91 9166161447
        </p>
        <p className="py-2">
          <span><a href='https://www.linkedin.com/in/pallav-goyal-a69730261/' className="font-bold">Linkedin</a></span>
        </p>
      </div>
    </section>
  )
}
export default Contact