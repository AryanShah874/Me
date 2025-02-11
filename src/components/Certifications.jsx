import React from 'react'
import mongodb from '../assets/images/mongodb.png'
import github from '../assets/images/github.png'
import postman from '../assets/images/postman.png'
import meta1 from '../assets/images/meta1.png'
import meta2 from '../assets/images/meta2.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Certifications = () => {
  const MotionLink=motion(Link);

  return (
    <>
    {/* thinking of making trading cards */}
      <h2 className='font-bold text-8xl w-full text-center sm:text-6xl xs:text-4xl md:mb-16'>
        Certifications
      </h2>

      <div className='w-[75%] lg:w-[90%] md:w-full mx-auto my-20 relative'>
        {/* grid with 5 colums */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-4 gap-6 sm:gap-8'>
          <MotionLink whileHover={{scale: 1.2}} to='https://www.credly.com/badges/3addee50-5cb2-4735-9b29-37f5f2235657/linked_in_profile' target='_blank'>
            <img src={mongodb} alt="mongodb-badge" className='h-40 w-full object-contain' />
          </MotionLink>
          <MotionLink whileHover={{scale: 1.2}} to='https://www.credly.com/badges/630a804c-4fb6-4bc6-86be-552614d370f3/linked_in_profile' target='_blank'>
            <img src={github} alt="github-badge" className='h-40 w-full object-contain' />
          </MotionLink>
          <MotionLink whileHover={{scale: 1.2}} to='https://api.badgr.io/public/assertions/fVaPj58FRASVZJbArkc-NA' target='_blank'>
            <img src={postman} alt="postman-badge" className='h-40 w-full object-contain'/>
          </MotionLink>
          <MotionLink whileHover={{scale: 1.2}} to='https://www.coursera.org/account/accomplishments/records/XXENGQZ54P8Q' target='_blank'>
            <img src={meta1} alt="meta-badge" className='h-40 w-full object-contain' />
          </MotionLink>
          <MotionLink whileHover={{scale: 1.2}} to='https://www.coursera.org/account/accomplishments/records/L6SPTP6LUHRL' target='_blank'>
            <img src={meta2} alt="meta-badge" className='h-40 w-full object-contain'/>
          </MotionLink>
        </div>
      </div>
    </>
  )
}

export default Certifications