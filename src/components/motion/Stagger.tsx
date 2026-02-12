import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer } from './motionPresets'

type StaggerProps = {
  children: React.ReactNode
  className?: string
  staggerChildren?: number
  delayChildren?: number
  once?: boolean
  animateOnMount?: boolean
  as?: keyof JSX.IntrinsicElements
}

const Stagger: React.FC<StaggerProps> = ({
  children,
  className = '',
  staggerChildren = 0.12,
  delayChildren = 0.05,
  once = true,
  animateOnMount = false,
  as = 'div',
}) => {
  const reducedMotion = useReducedMotion()
  const variants = staggerContainer(reducedMotion, staggerChildren, delayChildren)
  const MotionComponent = motion[as as keyof typeof motion] as React.ElementType

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      {...(animateOnMount
        ? { animate: 'show' }
        : { whileInView: 'show', viewport: { once, amount: 0.25 } })}
    >
      {children}
    </MotionComponent>
  )
}

export default Stagger
