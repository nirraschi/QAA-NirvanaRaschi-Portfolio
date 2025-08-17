import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { whatsapp } from '../assets';

const FeedbackCard = ({ index, testimonial }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px flex items-start justify-start gap-2'
  >
    <div className="mt-1 w-full">
      <p className='text-white tracking-wider text-m w-full'>{testimonial}</p>


    </div>
  </motion.div>

)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] w-full flex flex-col'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
          variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>¿Qué estoy buscando?</h2>

        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 w-full `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />

        ))}

      </div>

      <div className='m-8 mt-0 bg-tertiary rounded-[20px] w-1/2 flex items-center justify-center gap-6 p-2'>
          <p>Si pensás que puedo aportar a tu equipo, charlemos!</p>

          <a href="https://api.whatsapp.com/send?phone=5493814643636" target='_blank'>
            <img src={whatsapp} alt="whatsapp" className="w-12 h-12 cursor-pointer hover:scale-105 transition-all duration-300" />
          </a>

      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "") 