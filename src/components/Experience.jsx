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
      <h2 className='font-bold text-8xl my-32 w-full text-center'>
        Education and Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          {/* <li className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between'>
            <h3 className='capitalise font-bold text-2xl'>Member&nbsp;<a target='_blank' href="https://lnmiit.ac.in" className='text-red-500 capitalize'>@Astronomy Club</a></h3>
            <span className='capitalise font-medium text-dark/75'>January 2024 - May 2024 | Jaipur, India</span>
            <p className='font-medium w-full'>
              Organized various events and workshops to spread awareness about Astronomy and Astrophysics.
              Also, conducted stargazing sessions and night sky observation camps.
            </p>
          </li> */}
            <li ref={listRef1} className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between'>
              <ListIcon reference={listRef1}/>
              <motion.div initial={{y: 50}} whileInView={{y:0}} transition={{duration: 0.5, type: 'spring'}}>
                <h3 className='capitalise font-bold text-2xl'>Student&nbsp;<a target='_blank' href="http://sssvjam.org" className='text-red-500 capitalize'>@SSSV</a></h3>
                <span className='capitalise font-medium text-dark/75'>2019-2021 | Jamnagar, India</span>
                <p className='font-medium w-full'>Pursued my higher secondary education in Science stream with Physics, Chemistry, and Mathematics as my core subjects.</p>
              </motion.div>
            </li>
          <li ref={listRef2} className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between'>
            <ListIcon reference={listRef2}/>
            <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5, type: 'spring'}}>
              <h3 className='capitalise font-bold text-2xl'>CSE Student&nbsp;<a target='_blank' href="https://lnmiit.ac.in" className='text-red-500 capitalize'>@LNMIIT</a></h3>
              <span className='capitalise font-medium text-dark/75'>2021-2025 | Jaipur, India</span>
              <p className='font-medium w-full'>
                Currently pursuing my Bachelor's degree in Computer Science and Engineering.
                I have taken courses like Data Structures, Algorithms, Operating Systems, and DBMS.
              </p>
            </motion.div>
          </li>
          <li ref={listRef3} className='my-8 w-[60%] mx-auto flex flex-col items-start justify-between'>
            <ListIcon reference={listRef3}/>
            <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.5, type: 'spring'}}>
              <h3 className='capitalise font-bold text-2xl'>Lab Teaching Assistant&nbsp;<a target='_blank' href="https://lnmiit.ac.in" className='text-red-500 capitalize'>@LNMIIT</a></h3>
              <span className='capitalise font-medium text-dark/75'>January 2024 - May 2024 | Jaipur, India</span>
              <p className='font-medium w-full'>Assisted students in understanding and implementing the concepts of Data Structures and Algorithms. 
                Topics included Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, etc.
              </p>
            </motion.div>
          </li>
          <li ref={listRef4} className='my-8 w-[60%] mx-auto flex flex-col items-start  justify-between'>
            <ListIcon reference={listRef4}/>
            <motion.div initial={{y: 50}} whileInView={{y: 0}} transition={{duration: 0.2, type: 'spring'}}>
              <h3 className='capitalise font-bold text-2xl'>SDE Intern&nbsp;<a target='_blank' href="https://in.linkedin.com/company/volta-industries-llp" className='text-red-500 capitalize'>@Dimension Six</a></h3>
              <span className='capitalise font-medium text-dark/75'>June 2024 - August 2024 | Mumbai, India</span>
              <p className='font-medium w-full'>Developed responsive and interactive web applications using MERN.
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