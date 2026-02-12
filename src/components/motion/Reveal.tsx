import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUpVariant } from './motionPresets'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  blur?: number
  once?: boolean
  withParent?: boolean
  as?: keyof JSX.IntrinsicElements
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 24,
  blur = 6,
  once = true,
  withParent = false,
  as = 'div',
}) => {
  const reducedMotion = useReducedMotion()
  const variants = fadeUpVariant(reducedMotion, y, blur, duration, delay)
  const MotionComponent = motion[as as keyof typeof motion] as React.ElementType

  if (withParent) {
    return (
      <MotionComponent className={className} variants={variants}>
        {children}
      </MotionComponent>
    )
  }

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </MotionComponent>
  )
}

export default Reveal
