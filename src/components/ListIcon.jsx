import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ListIcon = ({reference}) => {
  const {scrollYProgress}=useScroll({target: reference, offset: ['center end', 'center center'], layoutEffect: false});

  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
      <svg className='-rotate-90' width={75} height={75} viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" className='stroke-gray-300 stroke-1 fill-none'/>
        <motion.circle style={{pathLength: scrollYProgress}} cx="75" cy="50" r="20" className="stroke-[5px] fill-light dark:fill-dark"/>
        <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-red-500"/>
      </svg>
    </figure>
  )
}

export default ListIcon