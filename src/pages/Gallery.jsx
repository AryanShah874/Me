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
        <meta name='description' content="Hi, I’m Aryan — a Full Stack Developer from India. I recently completed my B.Tech in Computer Science and Engineering from LNMIIT, Jaipur, and I’m currently working as an SDE Intern at E2E Networks. I love building websites and web applications that combine clean design with great performance. My focus lies in creating dynamic, responsive, and user-friendly interfaces that make technology feel effortless."/>
        <meta name='keywords' content='Aryan Shah, Aryan, Full Stack Developer, Software Engineer, SDE Intern, E2E Networks, LNMIIT Jaipur, Computer Science Engineer, Web Developer, React Developer, Node.js Developer, MERN Stack, JavaScript, TypeScript, Express.js, MongoDB, Frontend Developer, Backend Developer, Web Applications, Mobile Applications, Responsive Design, UI/UX, API Development, Software Development, Cloud Computing, DevOps, Git, GitHub, REST APIs, Docker, HTML, CSS, React, Firebase, Appwrite, India, Delhi, Mumbai, Jaipur, Jamnagar, Tech Enthusiast, Portfolio, Software Projects, Coding, Web Design' />

        <meta property="og:title" content="Aryan Shah | Gallery" />
        <meta property="og:description" content="This section is under development in which I will showcase my photography skills" />
        <meta property="og:url" content="https://aryan-shah.vercel.app/gallery" />
        <meta property='og:type' content='website' />

         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Aryan Shah",
          "url": "https://aryan-shah.vercel.app",
          "sameAs": [
            "https://www.linkedin.com/in/aryan-shah-10b52b252",
            "https://github.com/AryanShah874"
          ],
          "description": "Hi, I’m Aryan — a Full Stack Developer from India. I recently completed my B.Tech in Computer Science and Engineering from LNMIIT, Jaipur, and I’m currently working as an SDE Intern at E2E Networks. I love building websites and web applications that combine clean design with great performance. My focus lies in creating dynamic, responsive, and user-friendly interfaces that make technology feel effortless.",
          "image": "https://aryan-shah.vercel.app/profile.jpg",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "LNMIIT"
          },
          "jobTitle": "SDE Intern",
          "worksFor": {
            "@type": "Organization",
            "name": "E2E Networks"
          }
        }` }} />
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