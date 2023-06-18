'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About WannaBuidl" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">WannaBuidl </span> 
        is coming to bring together talented developers with innovative founders and communities to 
        {' '}
        <span className="font-extrabold text-white">
          buidl a better future.
        </span>{' '}
        Gone are the days where you needed to post countless tweets, DMs in Twitter, Telegram, Discord, etc.

        {' '}
        <span className="font-extrabold text-white">Create a profile </span>  
        and find other developers to work with and projects to work on.
        {' '}
        <span className="font-extrabold text-white">Scroll down</span> to learn more about WannaBuidl
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;