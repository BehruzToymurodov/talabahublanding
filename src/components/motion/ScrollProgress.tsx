import React from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <div className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 opacity-60" />
    )
  }

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgress
