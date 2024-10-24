/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import { ProjectCard } from './index.js';
import { web_link } from '../assets/index.js';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]"
        >
          These are my featured projects; ones in which I am particular proud of
          or made me learn something new.
          <br />
          <br />
        </motion.p>
      </div>
      <h2 className="divider text-black mt-20 font-black text-3xl">
        <span className="ml-[20px] mr-[20px]">2024</span>
      </h2>
      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
