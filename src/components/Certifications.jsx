import React from 'react'
import github from '../assets/images/github.png'
import postman from '../assets/images/postman.png'
import meta1 from '../assets/images/meta1.png'
import meta2 from '../assets/images/meta2.png'
import { Link } from 'react-router-dom'

const Certifications = () => {
  return (
    <>
      <h2 className='font-bold text-8xl w-full text-center sm:text-6xl xs:text-4xl md:mb-16'>
        Certifications
      </h2>

      <div className='w-[75%] lg:w-[90%] md:w-full mx-auto my-20 relative'>
        {/* grid with 5 colums */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-4 gap-6 sm:gap-8'>
          <Link to='https://www.credly.com/badges/630a804c-4fb6-4bc6-86be-552614d370f3/linked_in_profile' target='_blank'>
            <img src={github} alt="github-badge" className='h-40 w-full object-contain' />
          </Link>
          <Link to='https://api.badgr.io/public/assertions/fVaPj58FRASVZJbArkc-NA' target='_blank'>
            <img src={postman} alt="postman-badge" className='h-40 w-full object-contain'/>
          </Link>
          <Link to='https://www.coursera.org/account/accomplishments/records/XXENGQZ54P8Q' target='_blank'>
            <img src={meta1} alt="meta-badge" className='h-40 w-full object-contain' />
          </Link>
          <Link to='https://www.coursera.org/account/accomplishments/records/L6SPTP6LUHRL' target='_blank'>
            <img src={meta2} alt="meta-badge" className='h-40 w-full object-contain'/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Certifications