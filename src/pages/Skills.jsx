import React from 'react'
import {motion} from 'framer-motion'

const Skill=({name, x, y})=>{
  return(
    <motion.div whileHover={{scale: 1.1}} initial={{x: 0, y: 0}} animate={{x:x, y:y}} transition={{duration: 1.5}} className='flex justify-center items-center bg-dark text-light py-3 px-6 rounded-full absolute cursor-pointer'>
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div whileHover={{scale: 1.05}} className='flex justify-center items-center bg-dark text-light p-6 rounded-full cursor-pointer'>
          Web
        </motion.div>

        <Skill name='HTML' x='-5vw' y='-6vw'/>
        <Skill name='CSS' x='15vw' y='-6vw'/>
        <Skill name='JS' x='17vw' y='10vw'/>
        <Skill name='React' x='2vw' y='18vw'/>
      </div>
    </>
  )
}

export default Skills