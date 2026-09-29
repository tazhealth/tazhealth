import React from 'react';
import { motion } from 'framer-motion';
import { EASE, fadeUp, staggerContainer } from '../../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: EASE, delay }}>
      
      {children}
    </motion.div>);

}

type GroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: 'div' | 'ul' | 'ol';
};

export function RevealGroup({ children, className, stagger = 0.07, as = 'div' }: GroupProps) {
  const Comp = (as === 'ul' ? motion.ul : as === 'ol' ? motion.ol : motion.div) as typeof motion.div;
  return (
    <Comp
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}>
      
      {children}
    </Comp>);

}

type ItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li';
};

export function RevealItem({ children, className, as = 'div' }: ItemProps) {
  const Comp = (as === 'li' ? motion.li : motion.div) as typeof motion.div;
  return (
    <Comp className={className} variants={fadeUp}>
      {children}
    </Comp>);

}