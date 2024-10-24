/* eslint-disable react/prop-types */
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-light-bg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-accent text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-[15px] text-center py-2">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Hello.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>
          Welcome to my profile! My name is ***, a software developer
          dedicated to guiding you through the perils of the web and tech.
          Technology can be scary, but it doesn't have to be. Let me help you.
        </p>
        <br />
        <p>
          I am currently pursuing a{' '}
          <span className="text-[]">
            Master of Computer Science from the University of Pennsylvania
          </span>
          , and have expertise in{' '}
          <span className="text-[#D2691E]">
            full-stack web development and software engineering.
          </span>
        </p>
        <br />
        <p>
          I come from a unique background with a Bachelor's of Science in
          Kinesiology from the University of Alberta. As I pursued my studies, I
          explored my passion for tech by self-teaching myself web development,
          diving into Linux/Unix, and using cool tools like Vim.
        </p>
        <br />
        <p>
          I am passionate, and love continuous learning. Don't be afraid to
          reach out!
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
