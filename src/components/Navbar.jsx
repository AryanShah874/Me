import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';

const CustomLink=({to, title, className=""})=>{
  const location=useLocation();

  return(
    <Link to={to} className={`${className} relative group`}>{title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${location.pathname===to ? 'w-full': 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink to="/" title="Home" className="mr-4"/>
        <CustomLink to="/about" title="About" className="mx-4"/>
        <CustomLink to="/projects" title="Projects" className="mx-4"/>
        <CustomLink to="/contact" title="Contact" className="ml-4"/>
        
      </nav>
      {/* <Logo />  not centerd so will use absolute */}
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a whileHover={{y: -4}} href="https://github.com/AryanShah874" target='_blank' className='w-6 mr-3'><GithubIcon /></motion.a>
        <motion.a whileHover={{y: -4}} href='https://www.linkedin.com/in/aryan-shah-10b52b252' target='_blank' className='w-6 mx-3'><LinkedInIcon /></motion.a>
        <motion.a whileHover={{y: -4}} href="https://www.twitter.com" target='_blank' className='w-6 ml-3'><TwitterIcon /></motion.a>
      </nav>

      <div className='absolute left-[50%] translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Navbar