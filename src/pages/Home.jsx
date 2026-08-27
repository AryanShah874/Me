import { Suspense, lazy } from 'react'
import profile from '../assets/images/profile.png'
import AnimatedText from '../components/AnimatedText'
import ResumePDF from '../assets/resume_offcampus.pdf'
import {LinkArrow} from '../components/Icons'
// import HireMe from '../components/HireMe'
const HireMe = lazy(() => import('../components/HireMe'))
import Seo from '../components/Seo'
import TransitionEffect from '../components/TransitionEffect'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Seo path="/" preloadImage="https://aryan-shah.vercel.app/profile.jpg" />

      <TransitionEffect />
      
      <main className='flex items-center text-dark dark:text-white w-full min-h-screen'>
        <div className='w-full h-full inline-block z-0 bg-transparent p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-0 md:pt-16 sm:pt-8'>
          
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full py-8'>
              <img draggable={false} src={profile} alt="profile" className='w-full h-auto lg:hidden md:inline-block md:w-full' />
            </div>
            <section className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text='From Concept  to Code, Watch Ideas Explode' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:text-6xl md:text-5xl sm:text-3xl' />

              <p className='my-4 text-base pb-2 font-medium md:text-sm sm:text-xs'>
                Hi, I’m Aryan — a Software Engineer from India. I hold a B.Tech in Computer Science and Engineering from LNMIIT, Jaipur, and I’m currently working as an Associate Software Engineer at E2E Cloud, building and maintaining full-stack features for cloud infrastructure products. I love building scalable, reliable systems that combine clean engineering with great performance.
              </p>

              <div className='flex items-center justify-center self-start lg:self-center'>
                  <a href={ResumePDF} target='_blank' className='flex items-center bg-dark text-light dark:bg-white dark:text-dark text-lg font-semibold p-2.5 px-6 md:p-2 md:px-4 md:text-base rounded-lg border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-saiyan dark:hover:bg-dark dark:hover:text-light dark:hover:border-kamehameha'>
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
      </main>
    </>
  )
}

export default Home