import React from 'react'
import { CircularText } from './Icons'
import { Link } from 'react-router-dom'
import useThemeSwitcher from '../hooks/useThemeSwitcher'

const HireMe = () => {
  const [mode]=useThemeSwitcher();
  console.log(mode);
  return (
    <div className='fixed -left-1 -bottom-28 flex justify-center items-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={'animate-spin-slow fill-dark dark:fill-light'} />
        <Link to='/contact' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:bg-light dark:text-dark w-20 h-20 rounded-full shadow-md'>
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe