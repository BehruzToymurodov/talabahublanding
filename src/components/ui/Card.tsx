import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type CardProps = {
  className?: string
  children: React.ReactNode
  hoverable?: boolean
  tone?: 'blue' | 'green' | 'teal' | 'amber' | 'neutral'
}

const Card: React.FC<CardProps> = ({ className = '', children, hoverable = true, tone = 'blue' }) => (
  <CardInner className={className} hoverable={hoverable} tone={tone}>
    {children}
  </CardInner>
)

type CardInnerProps = {
  className?: string
  hoverable?: boolean
  children: React.ReactNode
  tone?: 'blue' | 'green' | 'teal' | 'amber' | 'neutral'
}

const CardInner: React.FC<CardInnerProps> = ({
  className = '',
  children,
  hoverable = true,
  tone = 'blue',
}) => {
  const reducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const frame = useRef<number | null>(null)
  const [glowEnabled, setGlowEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (reducedMotion) {
      setGlowEnabled(false)
      return
    }
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setGlowEnabled(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [reducedMotion])

  useEffect(() => {
    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current)
      }
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!glowEnabled || !ref.current) return
    if (frame.current) cancelAnimationFrame(frame.current)
    const element = ref.current
    frame.current = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      element.style.setProperty('--x', `${x}%`)
      element.style.setProperty('--y', `${y}%`)
    })
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.setProperty('--x', '50%')
    ref.current.style.setProperty('--y', '50%')
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className={`glass-card card-glow glow-${tone} group rounded-3xl p-6 transition ${
        hoverable ? 'hover:shadow-glow' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
