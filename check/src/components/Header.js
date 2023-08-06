import React from 'react'
const Header=() => {
  return (
    <header className='flex justify-between px-5 py-2 bg-primary text-white'>
        <a href="/" className="cursive logo text-3xl font-bold text-accent">Pallav Goyal</a>
        <nav className='hidden md:block'>
        <ul className='flex'>
            <li><a href="/#">Home</a></li>
            <li><a href="/#About">About</a></li>
            <li><a href="/#Projects">Projects</a></li>
            <li><a href="/#Contact">Contact</a></li>
        </ul>
        </nav>   
    </header>
  )
}

export default Header