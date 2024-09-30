import React from 'react'
import { motion } from 'framer-motion';

const quote={
  initial: {},
  animate: {transition: {staggerChildren: .1}},
  //stagger children to apply animation child by child
}

const singleWord={
  initial: {opacity: 0, y: 50},
  animate: {opacity: 1, y: 0, transition: {duration: 1}},
}

const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-4 sm:py-0 flex items-center justify-center text-center overflow-hidden'>
      
      <motion.h1 variants={quote} initial='initial' animate='animate' className={`${className} inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl`}>
        {text.split(' ').map((word, index) => {
          return (
            <motion.span variants={singleWord} key={word+index} className='inline-block'>
              {word}&nbsp;
            </motion.span>
          )
        })}
      </motion.h1>

    </div>
  )
}

export default AnimatedText