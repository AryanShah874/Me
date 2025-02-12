import React, { Suspense, lazy } from 'react'
import profile from '../assets/images/profile.png'
import AnimatedText from '../components/AnimatedText'
import ResumePDF from '../assets/resume_offcampus.pdf'
import {Cube, LinkArrow} from '../components/Icons'
// import HireMe from '../components/HireMe'
const HireMe = lazy(() => import('../components/HireMe'))
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import TransitionEffect from '../components/TransitionEffect'
import { Link } from 'react-router-dom'

const Home = () => {
  const image={
    initial: {opacity: 1, x: -200, rotate: 360},
    animate: {opacity: 1, x: 0, rotate: 0, transition: {duration: 1.5}},
  }

  return (
    <>
      <Helmet>
        <title>Aryan Shah</title>
        <meta name='description' content="Welcome to Aryan's Portfolio, He is a undergraduate pursuing B.Tech in CSE from LNMIIT. He likes to develop projects and travelling."/>
        <meta name='keywords' content='Aryan Shah, Full stack developer, MERN Developer, Web Developer, Backend Developer, Frontend Developer, React, JavaScript, Portfolio, Jamnagar, LNMIIT, Jaipur, CSE, Node, Aryan Shah LNMIIT' />
        <link rel="preload" as='image' href="https://www.aryanshah.me/assets/profile4-BhL-sAHS.jpg" />
        <link rel="canonical" href="https://www.aryanshah.me" />


        {/* open graph tags */}
        <meta property='og:title' content='Aryan Shah | Full Stack Developer' />
        <meta property='og:description' content='Welcome to my portfolio where you can find what I do and get connected.' />
        <meta property='og:image' content="https://www.aryanshah.me/assets/profile4-BhL-sAHS.jpg" />
        <meta property='og:url' content='https://www.aryanshah.me' />
        <meta property='og:type' content='website' />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Aryan Shah",
          "url": "https://www.aryanshah.me/",
          "sameAs": [
            "https://www.linkedin.com/in/aryan-shah-10b52b252",
            "https://github.com/AryanShah874"
          ],
          "description": "Aryan Shah is a passionate Full Stack Developer specializing in building and designing websites, web applications, and mobile applications."
        }` }} />
      </Helmet>

      <TransitionEffect />
      
      <main className='flex items-center text-dark dark:text-white w-full min-h-screen'>
        <div className='w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-0 md:pt-16 sm:pt-8'>
          
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full py-8'>
              <img draggable={false} src={profile} alt="profile" className='w-full h-auto lg:hidden md:inline-block md:w-full' />
            </div>
            <section className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text='From Concept  to Code, Watch Ideas Explode' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:text-6xl md:text-5xl sm:text-3xl' />

              <p className='my-4 text-base pb-2 font-medium md:text-sm sm:text-xs'>
                I'm a Aryan, a passionate Full Stack Developer based out of India, currently pursuing B.Tech in CSE from LNMIIT, Jaipur. I specialize in building and designing websites, web applications, and mobile applications. I am passionate about creating intuitive, dynamic, and responsive user interfaces that provide a seamless user experience.
              </p>

              <div className='flex items-center justify-center self-start lg:self-center'>
                  <a href={ResumePDF} target='_blank' className='flex items-center bg-dark text-light dark:bg-white dark:text-dark text-lg font-semibold p-2.5 px-6 md:p-2 md:px-4 md:text-base rounded-lg border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light'>
                    Résumé <LinkArrow className='w-6 ml-1'/>
                  </a>   
                <Link to={'/contact'} className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'>
                  Contact
                </Link>
              </div>
            </section>
          </div>
          
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <HireMe />
        </Suspense>

        <motion.div variants={image} initial='initial' animate='animate' className='absolute right-8 top-20'>
          <Cube className={'w-40 h-40 lg:w-35 lg:h-35 md:hidden'}/>
        </motion.div>
      </main>
    </>
  )
}

export default Home