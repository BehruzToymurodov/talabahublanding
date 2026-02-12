import type { Variants } from 'framer-motion'

export const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const fadeUpVariant = (
  reducedMotion: boolean,
  y = 24,
  blur = 6,
  duration = 0.6,
  delay = 0,
): Variants => ({
  hidden: {
    opacity: 0,
    y: reducedMotion ? 0 : y,
    filter: reducedMotion ? 'blur(0px)' : `blur(${blur}px)`,
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: reducedMotion ? 0 : duration,
      delay: reducedMotion ? 0 : delay,
      ease: easeOut,
    },
  },
})

export const staggerContainer = (
  reducedMotion: boolean,
  staggerChildren = 0.12,
  delayChildren = 0.05,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: reducedMotion ? 0 : staggerChildren,
      delayChildren: reducedMotion ? 0 : delayChildren,
    },
  },
})

export const heroContainer = (reducedMotion: boolean): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.14,
      delayChildren: reducedMotion ? 0 : 0.1,
    },
  },
})

export const heroItem = (reducedMotion: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y: reducedMotion ? 0 : 18,
    filter: reducedMotion ? 'blur(0px)' : 'blur(6px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: reducedMotion ? 0 : 0.6,
      ease: easeOut,
    },
  },
})
