import React from 'react'
import profile from '../assets/images/profile.png'
import AnimatedText from '../components/AnimatedText'
import ResumePDF from '../assets/Resume-4.pdf'
import {Cube, LinkArrow} from '../components/Icons'
import HireMe from '../components/HireMe'
import { motion } from 'framer-motion'

const Home = () => {
  const image={
    initial: {opacity: 1, x: -200, rotate: 360},
    animate: {opacity: 1, x: 0, rotate: 0, transition: {duration: 1.5}},
  }

  return (
    <main className='flex items-center text-dark w-full min-h-screen'>
      <div className='w-full h-full inline-block z-0 bg-light p-32 pt-0'>
        
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <img draggable={false} src={profile} alt="profile" className='w-full h-auto' onCopy="return false" onPaste="return false" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text='Turning Vision into Reality with Code and Design' className='!text-6xl !text-left' />
            
            <p className='my-4 text-base font-medium'>As a skilled full stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my skills in web development.
            </p>

            <div className='flex items-center justify-center self-start'>
                <a href={ResumePDF} target='_blank' className='flex items-center bg-dark text-light text-lg font-semibold p-2.5 px-6 rounded-lg border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark'>
                  Résumé <LinkArrow className='w-6 ml-1'/>
                </a>   
              <a href='mailto:aryanwork10@gmail.com' target='_blank' className='ml-4 text-lg font-medium capitalize text-dark underline'>
                Contact
              </a>
            </div>
          </div>
        </div>
        
      </div>

      <HireMe />

      <motion.div variants={image} initial='initial' animate='animate' className='absolute right-8 top-20'>
        <Cube className={'w-40 h-40'}/>
      </motion.div>
    </main>
  )
}

export default Home