import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({
    imgURL,
    label,
    subtext
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className='flex-1 sm:w-[350px] sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-16'
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
        />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </motion.div>
  );
};

export default ServiceCard;
