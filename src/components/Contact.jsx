import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { whatsapp } from '../assets'



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_1gkiwmh',
      'template_6oeb3xq',
      {
        from_name: form.name,
        to_name: 'Nirvana',
        from_email: form.email,
        to_email: 'nirraschi@gmail.com',
        message: form.message
      },
      'k2TE9tv6nt4JfzmWB'
    )
      .then(() => {
        setLoading(false);
        alert("¡Gracias por tu mensaje! Te contactaré lo más rápido posible.")


        setForm({
          name: '',
          email: '',
          message: ''
        }

        )

      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('Algo salió mal al intentar enviar el mensaje. Puedes contactarme en nirraschi@gmail.com .')
      }
      )
  }




  return (
    <div className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>

      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>estemos en contacto</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>

          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Nombre
            </span>
            <input type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cómo es tu nombre?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium ' />
          </label>


          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Email
            </span>
            <input type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Para poder contactarte."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium ' />
          </label>

          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Tu mensaje
            </span>
            <input
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Lo que quieras decirme."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium ' />
          </label>
          <div className='flex items-center justify-between w-full'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl '>
              {loading ? 'Enviando...' : 'Enviar'}

            </button>

            <a href="https://api.whatsapp.com/send?phone=5493814643636" target='_blank'>
              <img src={whatsapp} alt="whatsapp" className="w-12 h-12 cursor-pointer hover:scale-105 transition-all duration-300" />
            </a>

          </div>

        </form>

      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350]'>
        <EarthCanvas />

      </motion.div>
    </div>

  )
}

export default SectionWrapper(Contact, "contact")