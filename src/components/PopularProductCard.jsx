import React from 'react'
import { star } from '../assets/icons'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const PopularProductCard = ({
  imgURL, name, price
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id='products'
      className='max-container max-sm:mt-12'
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img
          src={imgURL}
          alt={name}
          className='w-[280px] h-[280px]'
        />
        <div className='mt-8 flex justify-start gap-2.5'>
          <img
            src={star}
            alt='rating'
            width={24}
            height={24}
          />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
      </div>
    </motion.section>
  )
}

export default PopularProductCard