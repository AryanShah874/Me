import { useEffect, useRef } from 'react'
import AnimatedText from '../components/AnimatedText'
import profile from '../assets/images/profile4.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Seo from '../components/Seo';
import TransitionEffect from '../components/TransitionEffect';
import Certifications from '../components/Certifications';

const AnimateNumber = ({ number }) => {
  const ref=useRef(null);

  const motionValue = useMotionValue(0);  //similar to useState
  const springValue = useSpring(motionValue, { duration: 8000 });  //a motion value that animates to the provided value
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
    <>
      <Seo title="About" path="/about" preloadImage="https://aryan-shah.vercel.app/profile.jpg" />

      <TransitionEffect />

      <main className='flex flex-col items-center justify-center w-full'>
        <div className='w-full h-full inline-block z-0 bg-transparent dark:text-light p-32 pt-0 xl:p-24 lg:p-16 md:p-12 sm:p-8'>
          <AnimatedText text='Trust Me, I am a "Programmer"' className='mb-14 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>

          <div className='w-full grid grid-cols-8 gap-16 sm:gap-8'>

            <div className='col-span-3 xl:col-span-4 md:order-2 md:col-span-8 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About me</h2>

              <p className='font-medium'>
                Hi, I&apos;m Aryan Shah, a software engineer with a passion for building reliable, well-engineered
                systems. With hands-on experience across full-stack development and cloud infrastructure, I am
                always looking for new and innovative ways to bring ideas to life.
              </p>
              <p className='font-medium mt-4'>
                I believe that good engineering is about more than just making things work – it&apos;s about solving problems and
                building systems that are reliable, scalable, and easy to use.
              </p>
              {/* <p className='font-medium'>
                I am proficient in a variety of programming languages and tools, including HTML, CSS, JavaScript, React, 
                Node.js, and Adobe Creative Suite. I am also well-versed in user experience design principles and best 
                practices.
              </p> */}
            </div>

            <div className='bg-transparent col-span-3 xl:col-span-4 md:order-1 md:col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light p-8'>
              <img draggable={false} src={profile} alt="profile" className='w-full h-auto rounded-lg' />
            </div>

            <div className='col-span-2 xl:col-span-8 md:order-3 flex flex-col justify-around items-end xl:flex-row xl:items-center'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimateNumber number={6} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimateNumber number={18}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>months of experience</h2>
              </div>
            </div>

          </div>

          <Skills />

          <Experience />

          <Certifications />
        </div>
      </main>
    </>
  )
}

export default About