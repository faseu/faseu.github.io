import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion.js';
import { Tilt } from 'react-tilt';
import { github_social, web_link } from '../assets/index.js';
import { Drawer } from '@mui/material';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  about,
  source_code_link,
  live_link,
}) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };
  return (
    <>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="w-[550px] p-[20px] pl-[30px]">
          <div className="mt-5">
            <h3 className="text-accent font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="my-4">
            <img
              src={image}
              alt={name}
              className="max-h-[400px] w-auto rounded-xl"
            />
          </div>
          <div className="my-8">
            <h3 className="text-accent">About</h3>
            <p className="mt-3 mb-5">{about}</p>
          </div>
          <div className="my-8">
            <h3 className="text-accent">Technologies</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => {
                return (
                  <button
                    key={tag.name}
                    className="bg-base-200 mt-1 mr-1 p-2 px-3 text-xs rounded-md font-bold"
                  >
                    #{tag.name}
                  </button>
                );
              })}
            </div>
          </div>
          {live_link && (
            <div className="my-8">
              <div className="flex items-center">
                <img
                  src={web_link}
                  alt="live-link"
                  className="w-[20px] h-[20px] object-contain"
                />
                <h3 className="text-accent ml-2">Live Link</h3>
              </div>
              <p className="mt-2">
                <a
                  target="_blank"
                  className="hover:link"
                  href={live_link}
                  rel="noreferrer"
                >
                  {live_link}
                </a>
              </p>
            </div>
          )}
          {source_code_link && (
            <div className="my-8">
              <div className="flex items-center">
                <img
                  src={github_social}
                  alt="live-link"
                  className="w-[20px] h-[20px] object-contain"
                />
                <h3 className="text-accent ml-2">Github</h3>
              </div>
              <p className="mt-2">
                <a
                  target="_blank"
                  className="hover:link"
                  href={source_code_link}
                  rel="noreferrer"
                >
                  {source_code_link}
                </a>
              </p>
            </div>
          )}
        </div>
      </Drawer>
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
        <div rel="noreferrer" onClick={toggleDrawer(true)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-base-200 p-5 rounded-2xl sm:w-[360px] w-full max-w-[330px]"
          >
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* container for the images on the card */}
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
                {/* This is the link to the live page */}
                {live_link && (
                  <div
                    onClick={() => window.open(live_link, '_blank')}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={web_link}
                      alt="live-link"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-accent font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => {
                return (
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    #{tag.name}
                  </p>
                );
              })}
            </div>
          </Tilt>
        </div>
      </motion.div>
    </>
  );
};
export default ProjectCard;
