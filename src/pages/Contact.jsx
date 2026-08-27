import React, { Suspense } from 'react'
import Seo from '../components/Seo'
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
      <Seo
        title="Contact"
        path="/contact"
        description="Get in touch with Aryan Shah — reach out for collaborations, opportunities, or just to say hello."
      />

      <TransitionEffect />

      <main className='flex flex-col justify-center items-center w-full'>
        <div className='w-full h-full inline-block z-0 bg-transparent dark:text-light p-32 pt-0 pb-16 xl:p-24 lg:p-16 md:p-12 sm:p-8'>

          <AnimatedText text="Get in Touch" className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

          <div className='w-full h-[70vh] sm:h-[65vh] flex sm:flex-col items-center justify-between'>
            <form ref={formRef} onSubmit={handleSubmit} className='w-[60%] sm:w-full h-full flex flex-col justify-center gap-4'>
              <input type="text" name='name' value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Name' required className='bg-black/5 dark:bg-white/5 border border-dark/10 dark:border-light/20 backdrop-blur-sm placeholder:text-dark/50 dark:placeholder:text-light/50 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-kamehameha transition-colors' />

              <input type="email" name='email' value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Email' required className='bg-black/5 dark:bg-white/5 border border-dark/10 dark:border-light/20 backdrop-blur-sm placeholder:text-dark/50 dark:placeholder:text-light/50 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-kamehameha transition-colors' />
              <textarea name='message' value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder='Message' required rows={4} className='bg-black/5 dark:bg-white/5 border border-dark/10 dark:border-light/20 backdrop-blur-sm placeholder:text-dark/50 dark:placeholder:text-light/50 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-kamehameha transition-colors' />

              <button type='submit' disabled={loading} onFocus={handleFocus} onBlur={handleBlur} className='mt-3 bg-dark text-light dark:bg-white dark:text-dark text-lg font-semibold p-2.5 px-6 md:p-2 md:px-4 md:text-base rounded-lg border-2 border-solid border-transparent hover:border-saiyan dark:hover:border-kamehameha transition-colors'>
                {loading ? 'Loading...' : 'Send Message'}
              </button>
            </form>

            <div className='h-full w-[40%] sm:hidden'>
              <Canvas camera={{position: [0, 0, 5], fov: 75, near: 0.1, far: 1000}}>

                <directionalLight intensity={2.5} position={[0, 0, 1]} />
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
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