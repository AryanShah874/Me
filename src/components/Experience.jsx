import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import ListIcon from './ListIcon';

const Experience = () => {
  const ref=useRef(null);
  const listRef1=useRef(null);
  const listRef2=useRef(null);
  const listRef3=useRef(null);
  const listRef4=useRef(null);

  const {scrollYProgress} = useScroll({target: ref, offset: ['start end', 'center start ']});

  return (
    <>
      <h2 className='font-bold text-8xl my-32 w-full text-center sm:text-6xl xs:text-4xl md:mb-16'>
        Education and Experience
      </h2>

      <div ref={ref} className='w-[75%] lg:w-[90%] md:w-full mx-auto relative my-32'>

        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          {/* <li className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between'>
            <h3 className='capitalise font-bold text-2xl'>Member&nbsp;<a target='_blank' href="https://lnmiit.ac.in" className='text-red-500 capitalize'>@Astronomy Club</a></h3>
            <span className='capitalise font-medium text-dark/75'>January 2024 - May 2024 | Jaipur, India</span>
            <p className='font-medium w-full'>
              Organized various events and workshops to spread awareness about Astronomy and Astrophysics.
              Also, conducted stargazing sessions and night sky observation camps.
            </p>
          </li> */}
            <li ref={listRef1} className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
              <ListIcon reference={listRef1}/>
              <motion.div initial={{y: 50}} whileInView={{y:0}} transition={{duration: 0.5, type: 'spring'}}>
                <h3 className='capitalise font-bold text-2xl sm:text-xl xs:text-lg'>Student&nbsp;<a target='_blank' href="http://sssvjam.org" className='text-red-500 animate-pulse capitalize'>@SSSV</a></h3>
                <span className='capitalise font-medium text-dark/75 xs:text-sm'>2019-2021 | Jamnagar, India</span>
                <p className='font-medium w-full md:text-sm'>Pursued my higher secondary education in Science stream with Physics, Chemistry, and Mathematics as my core subjects.</p>
              </motion.div>
            </li>
          <li ref={listRef2} className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <ListIcon reference={listRef2}/>
            <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5, type: 'spring'}}>
              <h3 className='capitalise font-bold text-2xl sm:text-xl xs:text-lg'>CSE Student&nbsp;<a target='_blank' href="https://lnmiit.ac.in" className='text-red-500 animate-pulse capitalize'>@LNMIIT</a></h3>
              <span className='capitalise font-medium text-dark/75 xs:text-sm'>2021-2025 | Jaipur, India</span>
              <p className='font-medium w-full md:text-sm'>
                Currently pursuing my Bachelor's degree in Computer Science and Engineering.
                I have taken courses like Data Structures, Algorithms, Operating Systems, and DBMS.
              </p>
            </motion.div>
          </li>
          <li ref={listRef3} className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <ListIcon reference={listRef3}/>
            <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5, type: 'spring'}}>
              <h3 className='capitalise font-bold text-2xl sm:text-xl xs:text-lg'>Lab Teaching Assistant&nbsp;<a target='_blank' href="https://lnmiit.ac.in" className='text-red-500 animate-pulse capitalize'>@LNMIIT</a></h3>
              <span className='capitalise font-medium text-dark/75 xs:text-sm'>January 2024 - May 2024 | Jaipur, India</span>
              <p className='font-medium w-full md:text-sm'>Assisted students in understanding and implementing the concepts of Data Structures and Algorithms. 
                Topics included Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, etc.
              </p>
            </motion.div>
          </li>
          <li ref={listRef4} className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <ListIcon reference={listRef4}/>
            <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.2, type: 'spring'}}>
              <h3 className='capitalise font-bold text-2xl sm:text-xl xs:text-lg'>SWE Intern&nbsp;<a target='_blank' href="https://in.linkedin.com/company/volta-industries-llp" className='text-red-500 animate-pulse capitalize'>@Dimension Six</a></h3>
              <span className='capitalise font-medium text-dark/75 sm:text-sm'>June 2024 - August 2024 | Mumbai, India</span>
              <p className='font-medium w-full md:text-sm'>Developed responsive and interactive web applications using MERN.
                Also tried out BaaS platforms like Firebase and appwrite.
              </p>
            </motion.div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Experience