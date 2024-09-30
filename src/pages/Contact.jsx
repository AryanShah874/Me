import React from 'react'
import { Helmet } from 'react-helmet-async'
import TransitionEffect from '../components/TransitionEffect'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Aryan Shah | Contact</title>
        <meta name="description" content="any description" />
      </Helmet>

      <TransitionEffect />

      <main>
        <div className='min-h-[67vh] w-full bg-light dark:bg-dark relative'>
          <h1 className='text-5xl text-dark dark:text-light font-bold animate-pulse absolute left-[50%] top-[48%] translate-x-[-50%] translate-y-[-50%]'>
            Coming Soon ... 
          </h1>
        </div>
      </main>
    </>
  )
}

export default Contact