import React, { useEffect, useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import profile from '../assets/images/profile2.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from './Skills';

const AnimateNumber = ({ number }) => {
  const ref=useRef(null);

  const motionValue = useMotionValue(0);  //similar to useState
  const springValue = useSpring(motionValue, { duration: 3000 });  //a motion value that animates to the provided value
  const isInView=useInView(ref, {once: true}); //a hook that returns true if the element is in view

  useEffect(() => {
    if(isInView) {
      motionValue.set(number);
    }
  }, [isInView, number, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= number) {
        ref.current.innerText = latest.toFixed(0);
      }
    })
  }, [springValue, number]);

  return (
    <span ref={ref} className='inline-block text-7xl font-bold'>
      {number}
    </span>
  )
}

const About = () => {
  return (
    <main className='flex flex-col items-center justify-center w-full'>
      <div className='w-full h-full inline-block z-0 bg-light p-32 pt-0'>
        <AnimatedText text='Passion Fuels Purpose!' className='mb-14'/>

        <div className='w-full grid grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About me</h2>

            <p className='font-medium'>
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
              new and innovative ways to bring my clients' visions to life.
            </p>
            <p className='font-medium mt-4'>
              I believe that design is about more than just making things look pretty – it's about solving problems and 
              creating intuitive, enjoyable experiences for users. 
            </p>
            {/* <p className='font-medium'>
              I am proficient in a variety of programming languages and tools, including HTML, CSS, JavaScript, React, 
              Node.js, and Adobe Creative Suite. I am also well-versed in user experience design principles and best 
              practices.
            </p> */}
          </div>

          <div className='bg-light col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8'>
            <img draggable={false} src={profile} alt="profile" className='w-full h-auto' />
          </div>

          <div className='col-span-2 flex flex-col justify-around items-end'>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimateNumber number={50} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>Projects completed</h2>
            </div>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimateNumber number={2}/>+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
            </div>
          </div>

        </div>

        <Skills />
      </div>
    </main>
  )
}

export default About