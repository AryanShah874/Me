import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-gray-400 text-lg font-medium sm:text-base'>
      <div className='w-full h-full z-0 bg-transparent dark:text-light p-32 py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span className=' whitespace-nowrap'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link to='/contact' className='text-center'>Say hello.</Link>
      </div>
    </footer>
  )
}

export default Footer