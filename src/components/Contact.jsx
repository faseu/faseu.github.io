import { useState, useRef, formRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendEmail = async () => {
    setLoading(true);
    return emailjs
      .send(
        'service_n87ghll',
        'template_xry6mlo',
        {
          from_name: form.name,
          to_name: '牛肉煎鸡蛋',
          from_email: form.email,
          to_email: 'l5713977886@outlook.com',
          message: form.message,
        },
        'MgYIQ3fcyBzKK45JU',
      )
      .then(() => {
        setLoading(false);

        setForm(
          {
            name: '',
            email: '',
            message: '',
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.');
          },
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // toastify sending email
    toast.promise(sendEmail(), {
      loading: 'Sending your message...',
      success:
        'Your message has been sent! Please wait for me to contact you back!',
      error: 'Error while sending your message...',
    });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-base-200 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-accent font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-neutral py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-accent font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-neutral py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-accent font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-neutral py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-neutral py-3 px-8 outline-none w-fit text-accent font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');