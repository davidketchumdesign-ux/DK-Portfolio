'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { revealVariants } from '@/lib/animation';

type RevealProps = Omit<HTMLMotionProps<'div'>, 'variants' | 'initial' | 'whileInView' | 'viewport'> & {
  /** Stagger index consumed by revealVariants to delay this item's fade-in. */
  custom?: number;
  /** Viewport margin for whileInView — pass '-50px' to start the reveal slightly before the element is fully in view (used for grid/list items so they cascade in together). */
  viewportMargin?: string;
};

/** Scroll-triggered fade/slide-up wrapper shared by every section and card on the site. */
export function Reveal({ custom, viewportMargin, ...rest }: RevealProps) {
  return (
    <motion.div
      custom={custom}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportMargin ? { once: true, margin: viewportMargin } : { once: true }}
      {...rest}
    />
  );
}
