import React, { useEffect, useRef } from 'react'
import {motion, useInView} from 'framer-motion'

const Skill=({name, x, y})=>{
  const ref=useRef(null);
  // const isInView=useInView(ref, {once: true});

  return(
    <motion.div ref={ref} whileHover={{scale: 1.1}} initial={{x: 0, y: 0}} whileInView={{x:x, y:y, transition: {duration: 1.5}}} viewport={{once: true}} className='flex justify-center items-center bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 lg:py-2 lg:px-4 md:py-1.5 md:px-3 md:text-sm xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold rounded-full absolute cursor-pointer'>
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-32 w-full text-center md:text-6xl'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
        <motion.div whileHover={{scale: 1.05}} className='flex justify-center items-center bg-dark text-light dark:bg-light dark:text-dark p-6 lg:p-5 md:p-3 xs:p-2 xs:text-sm rounded-full cursor-pointer'>
          Web
        </motion.div>

        <Skill name='HTML' x='-5vw' y='-6vw'/>
        <Skill name='CSS' x='15vw' y='-6vw'/>
        <Skill name='JS' x='17vw' y='10vw'/>
        <Skill name='ReactJS' x='2vw' y='18vw'/>
        <Skill name='NodeJS' x='-20vw' y='8vw'/>
        <Skill name='Express' x='-31vw' y='0'/>
        <Skill name='MongoDB' x='-15vw' y='-11vw'/>
        <Skill name='SQL' x='0' y='-18vw'/>
        <Skill name='Git' x='18vw' y='-18vw'/> 
      </div>
    </>
  )
}

export default Skills