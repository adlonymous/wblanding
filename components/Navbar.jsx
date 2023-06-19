'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav 
    variants = { navVariants }
    initial = 'hidden'
    whileInView = 'show'
    className = {`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[50%] inset-0 gradient-01 '/>
    <div className={`${styles.innerWidth} mx-15 gap-8 flex `}>
      {/* <img src="/search.svg" alt="search" className='w-[24px] h-[24px] object-contain' /> */}
      <a href="#"><img height ='45%' width='45%' src="/wblogo1.png" alt="WannaBuidl Logo" className=' flex flex-col justify-center items-center'/></a>
      {/* <h2 className='font-extrabold text-24px] leading-[30px] text-white'>WannaBuidl?</h2> */}
      {/* <img src ='/menu.svg' alt="menu" className='w-[24px] h-[24px] object-contain'/> */}
    </div>
  </motion.nav>
);

export default Navbar;
