import React from 'react'
import { CircularText } from './Icons'
import { Link } from 'react-router-dom'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 md:right-8 md:top-0 md:left-auto md:bottom-auto md:absolute sm:right-0 flex justify-center items-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className={'animate-spin-slow fill-dark dark:fill-light'} />
        <Link to='/contact' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:bg-light dark:text-dark w-20 h-20 rounded-full shadow-md md:w-11 md:h-11 md:text-[10px]'>
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe