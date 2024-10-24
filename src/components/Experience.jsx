/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant, mobileVariant } from '../utils/motion';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#c5c5c5', color: '#000' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-accent text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
        {experience.source && (
          <li className="text-[14px] pl-1 tracking-wider">
            <a
              className=" text-blue-600 dark:text-blue-500 hover:underline"
              href={experience.source.link}
              target="_blank"
              rel="noreferrer"
            >
              {experience.source.description}
            </a>
          </li>
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Learning Journey.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]">
          I started my journey as a self-taught developer, and then pivoted to
          formal education. I continue to learn outside of school.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
