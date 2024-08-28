import React from 'react'
import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className='fixed -left-1 -bottom-28 flex justify-center items-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-dark animate-spin-slow'}/>
        <a href="mailto:aryanwork10@gmail.com" target='_blank' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light w-20 h-20 rounded-full shadow-md'>
          Hire Me
        </a>
      </div>
    </div>
  )
}

export default HireMe