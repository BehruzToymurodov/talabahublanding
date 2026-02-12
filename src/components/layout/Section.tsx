import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type SectionProps = {
  id?: string
  className?: string
  children: React.ReactNode
  enableMotion?: boolean
  variant?: 'hero' | 'problem' | 'solution' | 'how' | 'demo' | 'soft' | 'neutral'
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  enableMotion = true,
  variant = 'neutral',
}) => {
  const reducedMotion = useReducedMotion()
  const variantClass = `section-fog section-fog--${variant}`

  if (reducedMotion) {
    return (
      <section id={id} className={`section-base py-20 ${variantClass} ${className}`}>
        {children}
      </section>
    )
  }

  if (!enableMotion) {
    return (
      <section id={id} className={`section-base py-20 ${variantClass} ${className}`}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      className={`section-base py-20 ${variantClass} ${className}`}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

export default Section
