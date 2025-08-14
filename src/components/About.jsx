import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import  { styles }  from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc/index';

const ServiceCard = ({ index, title, icon }) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
          variants={fadeIn("right","spring", 0.5 * index, 0.74)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}

        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>

          <h3 className='text-white text-[20px]0 font-bold font-center'>{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}



const About = () => {
  return (
    <>

    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introducción</p>
      <h2 className={styles.sectionHeadText}>Sobre mi.</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      ¡Hola! Bienvenido a mi portafolio.
      Acá vas a encontrar una mezcla de lo que más me gusta hacer: asegurar la calidad de software y, de vez en cuando, ponerme en modo dev para crear cosas con JavaScript, React y otras tecnologías que me divierten.
      Me encanta aprender, buscar soluciones creativas y trabajar con buena onda para que todo salga excelente.
      Si querés charlar, compartir ideas o pensar un proyecto juntos, escribime. <br/> ¡Espero que disfrutes mi portafolio tanto como yo disfruté creándolo!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">

    {services.map((service, index) => (
      <ServiceCard key={service.title} index={index}{...service} />
    ))}

    </div>
    
    </>
  )
}

export default SectionWrapper (About, "about")