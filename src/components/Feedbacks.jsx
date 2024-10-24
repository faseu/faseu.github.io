import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  src_link,
}) => (
  <a href={src_link} target="_blank" rel="noreferrer">
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="bg-light-bg p-10 rounded-3xl xs:w-[320px] w-full transition duration-300 ease-in-out hover:bg-purple-900"
    >
      {/*<p className='text-white font-black text-[48px]'>"</p>*/}

      <div className="mt-1">
        <div className="mb-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-accent font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <p className="text-black tracking-wider text-[18px]">{testimonial}</p>
      </div>
    </motion.div>
  </a>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-base-200 rounded-[20px]`}>
      <div className={`bg-neutral rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with me</p>
          <h2 className={styles.sectionHeadText}>Socials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
