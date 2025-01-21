import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import image from '../assets/images/image.png'

const Logo = () => {
  const MotionLink=motion(Link);

  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink to='/' className='bg-dark text-light w-14 h-14 flex justify-center items-center rounded-full text-2xl font-bold border-[3px] border-solid border-transparent dark:border-light' whileHover={{scale: 1.2, transition: {type: "spring", stiffness: 400, damping: 10}}} whileTap={{ scale: 0.9 }}>
        <img src={image} className='w-12 h-12 bg-light rounded-full hover:bg-[#F06B32] dark:hover:bg-[#0F94CD] filter dark:invert' alt="" />
      </MotionLink>
    </div>
  )
}

export default Logo