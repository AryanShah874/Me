import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark text-lg font-medium'>
      <div className='w-full h-full z-0 bg-light p-32 py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link to='/contact'>Say hello.</Link>
      </div>
    </footer>
  )
}

export default Footer