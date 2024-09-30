import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import { AnimatePresence, motion } from 'framer-motion';
import useThemeSwitcher from '../hooks/useThemeSwitcher';

const CustomLink=({to, title, className=""})=>{
  const location=useLocation();

  return(
    <Link to={to} className={`${className} relative group`}>{title}
      <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${location.pathname===to ? 'w-full': 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = React.useState(false);

  const location=useLocation();

  useEffect(()=>{
    setIsOpen(false);
  }, [location]);

  const menuVariants={
    initial: {scale: 0, opacity: 0, x: "-50%", y: "-50%"},
    animate: {scale: 1, opacity: 1, x: "-50%", y: "-50%"},
    exit: {scale: 0, opacity: 0, x: "-50%", y: "-50%"},
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

      <button className='hidden lg:flex flex-col justify-center items-center' onClick={()=>setIsOpen(!isOpen)}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-in block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-in block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-in block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        
        <nav>
          {/* <CustomLink to="/" title="Home" className="mr-4"/> */}
          <CustomLink to="/about" title="About" className="mr-4"/>
          <CustomLink to="/projects" title="Projects" className="mx-4"/>
          <CustomLink to="/contact" title="Contact" className="mx-4"/>
          <CustomLink to="/gallery" title="Gallery" className="ml-4"/>
          
        </nav>

        {/* <Logo />  not centerd so will use absolute */}

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a whileHover={{y: -4}} href="https://github.com/AryanShah874" target='_blank' className='w-6 mr-3'><GithubIcon /></motion.a>
          <motion.a whileHover={{y: -4}} href='https://www.linkedin.com/in/aryan-shah-10b52b252' target='_blank' className='w-6 mx-3'><LinkedInIcon /></motion.a>
          <motion.a whileHover={{y: -4}} href="https://x.com/A_Ryan_Shah" target='_blank' className='w-6 ml-3'><TwitterIcon /></motion.a>

          <button onClick={()=>setMode(mode==='light' ? 'dark' : 'light')} className='ml-10 flex items-center justify-center rounded-full p-1'>
            {mode==='dark' ? <SunIcon className='fill-dark' /> : <MoonIcon className='fill-light' />}
          </button>
        </nav>

      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen &&
          <motion.div initial='initial' animate='animate' exit='exit' variants={menuVariants} transition={{duration: 0.3}} className='min-w-[60vw] flex flex-col justify-between gap-10 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-light/50 dark:bg-dark/50 backdrop-blur-sm py-10 rounded-lg'>
            
            <nav className='flex flex-col justify-center items-center gap-y-6'>
              <CustomLink to="/" title="Home" />
              <CustomLink to="/about" title="About" />
              <CustomLink to="/projects" title="Projects" />
              <CustomLink to="/contact" title="Contact" />
              <CustomLink to="/gallery" title="Gallery" />
            </nav>

            {/* <Logo />  not centerd so will use absolute */}

            <nav className='flex items-center justify-center flex-wrap'>
              <motion.a whileHover={{y: -4}} href="https://github.com/AryanShah874" target='_blank' className='w-6 mr-3 sm:mx-1'><GithubIcon /></motion.a>
              <motion.a whileHover={{y: -4}} href='https://www.linkedin.com/in/aryan-shah-10b52b252' target='_blank' className='w-6 mx-3 sm:mx-1'><LinkedInIcon /></motion.a>
              <motion.a whileHover={{y: -4}} href="https://x.com/A_Ryan_Shah" target='_blank' className='w-6 mx-3 sm:mx-1'><TwitterIcon /></motion.a>

              <button onClick={()=>setMode(mode==='light' ? 'dark' : 'light')} className='ml-3 flex items-center justify-center rounded-full p-1'>
                {mode==='dark' ? <SunIcon className='fill-dark' /> : <MoonIcon className='fill-light' />}
              </button>
            </nav>

          </motion.div>
        }
        
      </AnimatePresence>


      <div className='absolute left-[50%] translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar