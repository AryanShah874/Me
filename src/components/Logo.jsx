import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Logo = () => {
  const MotionLink=motion(Link);

  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink to='/' className='bg-dark text-light w-14 h-14 flex justify-center items-center rounded-full text-2xl font-bold' whileHover={{scale: 1.2, transition: {type: "spring", stiffness: 400, damping: 10}}} whileTap={{ scale: 0.9 }}>AS</MotionLink>
    </div>
  )
}

export default Logo