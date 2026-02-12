import React from 'react'

type BadgeProps = {
  children: React.ReactNode
  className?: string
  variant?: 'blue' | 'green' | 'teal' | 'amber' | 'neutral'
}

const Badge: React.FC<BadgeProps> = ({ children, className = '', variant = 'neutral' }) => (
  <span
    className={`badge badge--${variant} ${className}`}
  >
    {children}
  </span>
)

export default Badge
