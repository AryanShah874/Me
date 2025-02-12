import React from 'react'
import { Helmet } from 'react-helmet-async'
import TransitionEffect from '../components/TransitionEffect'
// import HTMLFlipBook from 'react-pageflip'

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Aryan Shah | Gallery</title>
        <meta name="description" content="This section is under development in which I will showcase my photography skills" />
        <meta name="keywords" content="Aryan Shah, Full stack developer, MERN Developer, Web Developer, Backend Developer, Frontend Developer, React, JavaScript, Portfolio, Jamnagar, LNMIIT, Jaipur, CSE, Node, Aryan Shah LNMIIT" />
        <link rel="canonical" href="https://www.aryanshah.me" />

        <meta property="og:title" content="Aryan Shah | Gallery" />
        <meta property="og:description" content="This section is under development in which I will showcase my photography skills" />
        <meta property="og:url" content="https://www.aryanshah.me/gallery" />
      </Helmet>
      
      <TransitionEffect />

      {/* Want to implement a book with photos pasted and some description about it */}
      <div className='min-h-[67vh] w-full bg-light dark:bg-dark relative'>
        <h1 className='text-5xl text-dark dark:text-light font-bold animate-pulse absolute left-[50%] top-[48%] translate-x-[-50%] translate-y-[-50%]'>
          Coming Soon ... 
        </h1>
{/* 
        <HTMLFlipBook width={300} height={500} className="flip-book">
            <div className="demoPage" style={{ backgroundColor: 'blue', padding: '20px' }}>Page 1</div>
            <div className="demoPage" style={{ backgroundColor: 'red', padding: '20px' }}>Page 2</div>
            <div className="demoPage" style={{ backgroundColor: 'yellow', padding: '20px' }}>Page 3</div>
            <div className="demoPage" style={{ backgroundColor: 'green', padding: '20px' }}>Page 4</div>
        </HTMLFlipBook> */}
      </div>
    </>
  )
}

export default Gallery