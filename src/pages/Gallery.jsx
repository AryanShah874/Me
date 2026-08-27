import Seo from '../components/Seo'
import TransitionEffect from '../components/TransitionEffect'

const Gallery = () => {
  return (
    <>
      <Seo
        title="Gallery"
        path="/gallery"
        description="This section is under development, where Aryan Shah will showcase his photography."
        noindex
      />

      <TransitionEffect />

      {/* Want to implement a book with photos pasted and some description about it */}
      <div className='min-h-[67vh] w-full bg-transparent relative'>
        <h1 className='text-5xl text-dark dark:text-light font-bold animate-pulse absolute left-[50%] top-[48%] translate-x-[-50%] translate-y-[-50%]'>
          Coming Soon ...
        </h1>
      </div>
    </>
  )
}

export default Gallery