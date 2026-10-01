'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import type { TeamMember } from '../../types/content';
import { EASE } from '../../utils/motion';

const PAGE_SIZE = 8;

export function TeamGrid({ members }: {members: TeamMember[];}) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  return (
    <>
      <ul className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {members.slice(0, visible).map((m, i) =>
        <motion.li
          key={m.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: EASE, delay: i % 4 * 0.06 }}>

            <div className="group relative overflow-hidden rounded-lg bg-[#EDEDED]">
              <img
              src={m.image}
              alt={`Portrait of ${m.name}`}
              loading="lazy"
              className="aspect-[7/8] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]" />

              <div className="absolute inset-x-3 bottom-3 rounded-full border border-ink bg-white px-4 py-2 text-center">
                <h2 className="truncate text-base font-semibold leading-tight text-ink sm:text-[15px] lg:text-base">{m.name}</h2>
                <p className="mt-0.5 truncate text-[13px] leading-tight text-ink/70">{m.role}</p>
              </div>
            </div>
          </motion.li>
        )}
      </ul>

      {visible < members.length &&
      <div className="mt-10 flex justify-center">
          <button
          type="button"
          onClick={() => setVisible((v) => v + PAGE_SIZE)}
          className="inline-flex h-11 items-center gap-2 rounded-full border border-ink bg-white px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2">

            <ArrowDownIcon className="h-4 w-4" aria-hidden="true" /> Load more
          </button>
        </div>
      }
    </>);

}
