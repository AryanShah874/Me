import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import TransitionEffect from '../components/TransitionEffect'
import AnimatedText from '../components/AnimatedText';
import emailjs from '@emailjs/browser';
import {Canvas} from '@react-three/fiber';
import Pikachu from '../models/Pikachu';

const Contact = () => {
  const formRef=React.useRef(null);
  const [form, setForm] = React.useState({'name': '', 'email': '', 'message': ''});
  const [loading, setLoading] = React.useState(false);
  const [currentAnimation, setCurrentAnimation] = React.useState('Idle');

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleFocus=()=>{
    setCurrentAnimation('Walking');
  }

  const handleBlur=()=>{
    setCurrentAnimation('Idle');
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);

    setCurrentAnimation('Dance');

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Aryan Shah',
        from_email: form.email,
        to_email: 'aryanwork10@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      setForm({'name': '', 'email': '', 'message': ''});
      setTimeout(() => {
        setCurrentAnimation('Idle');
      }, 12000);
      // alert('Message sent successfully');
    }).catch((err)=>{
      console.log(err);
      setLoading(false);
      setCurrentAnimation('Idle');
      alert('Failed to send message');
    });
  }

  return (
    <>
      <Helmet>
        <title>Aryan Shah | Contact</title>
        <meta name="description" content="any description" />
      </Helmet>

      <TransitionEffect />

      <main className='flex flex-col justify-center items-center w-full'>
        <div className='w-full h-full inline-block z-0 bg-light dark:bg-dark dark:text-light p-32 pt-0 pb-16 xl:p-24 lg:p-16 md:p-12 sm:p-8'>

          <AnimatedText text="Get in Touch" className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

          <div className='w-full h-[70vh] sm:h-full flex sm:flex-col items-center justify-between'>
            <form ref={formRef} onSubmit={handleSubmit} className='w-[60%] sm:w-full h-full flex flex-col justify-center gap-4'>
              <input type="text" name='name' value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Name' required className='dark:bg-gray-600 py-2 px-3 rounded-lg focus:ring-2 focus:ring-dark dark:focus:ring-light' />

              <input type="email" name='email' value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Email' required className='dark:bg-gray-600 py-2 px-3 rounded-lg focus:ring-2 focus:ring-dark dark:focus:ring-light' />
              <textarea name='message' value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Message' required rows={4} className='dark:bg-gray-600 py-2 px-3 rounded-lg focus:ring-2 focus:ring-dark dark:focus:ring-light' />

              <button type='submit' disabled={loading} onFocus={handleFocus} onBlur={handleBlur} className='mt-3 bg-dark text-light dark:bg-white dark:text-dark text-lg font-semibold p-2.5 px-6 md:p-2 md:px-4 md:text-base rounded-lg border-2 border-solid border-transparent'>
                {loading ? 'Loading...' : 'Send Message'}
              </button>
            </form>

            <div className='h-full w-[40%] sm:w-full'>
              <Canvas camera={{position: [0, 0, 5], fov: 75, near: 0.1, far: 1000}}>

                <directionalLight intensity={2.5} position={[0, 0, 1]} />
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                  {/* <Fox currentAnimation={currentAnimation} position={[0.5, 0.35, -12]} rotation={[0.5, -1, 0]} scale={[0.1, 0.1, 0.1]} /> */}
                  {/* <Stegosaurous currentAnimation={currentAnimation} position={[0.5, -1, 2]} rotation={[0, -2.5, 0]} scale={[2, 2, 2]} /> */}
                  {/* <Sonic currentAnimation={currentAnimation} position={[0.5, -1, 2]} rotation={[0, 0, 0]} /> */}
                  <Pikachu currentAnimation={currentAnimation} position={[0, -2, 0]} rotation={[0.2, -0.8, 0]} scale={[3.5, 3.5, 3.5]} />
                </Suspense>
              </Canvas> 
            </div>
          </div>


        </div>
      </main>
    </>
  )
}

export default Contact