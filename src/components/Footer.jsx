import React from 'react'

const Footer = () => {
  return (
    <nav className='flex justify-around bg-indigo-900 text-white py-4 '>
        <div className="logo">
            <span className='font-bold text-xl mx-10'>Task</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Footer;
