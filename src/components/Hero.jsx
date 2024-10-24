/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

import { styles } from '../styles';
import animationData from './json/animationData.json'; // 动画数据JSON

const Hero = ({ loading }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, // 动画数据
    });
    return () => {
      animation.destroy(); // 清理动画资源
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-center justify-between gap-5`}
      >
        <div className={styles.heroSubText}>
          <p className="flip-horizontal-bottom">Hello, my</p>
          <p className="flip-horizontal-bottom">name&apos;s Faisal.</p>
          <p className="flip-horizontal-bottom">I&apos;m a Full</p>
          <p className="flip-horizontal-bottom">Stack Developer.</p>
        </div>
        <div className="absolute mb-40 right-0">
          <div ref={animationContainer} />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
