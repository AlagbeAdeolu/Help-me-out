import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between px-10 items-center border-b-2 text-blue-900 font-bold'>
      <div>
        HelpMeOut + Logo
      </div>
      <div className='flex gap-10'>
        <h2>Features</h2>
        <h2>How it Works</h2>
      </div>
      <div>
        <Link to='/'>Get Started</Link>
      </div>
    </div>
  )
}

export default Header
