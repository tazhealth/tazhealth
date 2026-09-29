'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

type Props = {
  paragraphs: string[];
  className?: string;
};

function Word({ word, progress, range }: {word: string;progress: MotionValue<number>;range: [number, number];}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="transition-none">
      {word}{' '}
    </motion.span>);

}

export function ScrollRevealText({ paragraphs, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] });

  const total = paragraphs.reduce((n, p) => n + p.split(' ').length, 0);
  const laidOut: {text: string;words: {word: string;range: [number, number];}[];}[] = [];
  let count = 0;
  for (const text of paragraphs) {
    const words = text.split(' ').map((word, i) => ({
      word,
      range: [(count + i) / total, (count + i + 1) / total] as [number, number]
    }));
    count += words.length;
    laidOut.push({ text, words });
  }

  return (
    <div ref={ref} className={className}>
      {laidOut.map((para, p) =>
      <p key={p}>
          {reduce ?
        para.text :
        para.words.map((w, i) => <Word key={i} word={w.word} progress={scrollYProgress} range={w.range} />)}
        </p>
      )}
    </div>);

}
