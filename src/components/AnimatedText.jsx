import { motion } from 'framer-motion';

// The parent <motion.h1> does not animate itself.
// Instead, it stagger animates its child elements (<motion.span>).
// staggerChildren: 0.1 → Each child animation starts 0.1s apart, creating a sequential effect.
const quote={
  initial: {},
  animate: {transition: {staggerChildren: .1}},
  //stagger children to apply animation child by child
}

// y:50-> move 50px down
const singleWord={
  initial: {opacity: 0, y: 50},
  animate: {opacity: 1, y: 0, transition: {duration: 1}},
}

const AnimatedText = ({text, className=""}) => {
  return (
    // w-full and mx-auto to center the text
    <div className='w-full mx-auto py-4 sm:py-0 flex items-center justify-center text-center overflow-hidden'>
      
      <motion.h1 variants={quote} initial='initial' animate='animate' className={`${className} inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl`}>
        {text.split(' ').map((word, index) => {
          return (
            // why span does not have attributes: initial and animate? They inherit the parent’s animation states. The parent’s <motion.h1> defines initial and animate at the “quote” variant level, so each <motion.span> only needs a variants prop. This ensures the children are staggered without requiring separate initial and animate on each span.
            <motion.span variants={singleWord} key={word+index} className='inline-block'>
              {word}&nbsp;
            </motion.span>
          )
        })}
      </motion.h1>

    </div>
  )
}

export default AnimatedText