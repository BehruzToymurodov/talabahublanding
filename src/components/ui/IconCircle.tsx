import React from 'react'

type IconCircleProps = {
  children: React.ReactNode
  className?: string
  variant?: 'blue' | 'green' | 'teal' | 'amber'
}

const IconCircle: React.FC<IconCircleProps> = ({ children, className = '', variant = 'blue' }) => (
  <div
    className={`icon-circle icon-circle--${variant} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 motion-reduce:transform-none ${className}`}
  >
    {children}
  </div>
)

export default IconCircle
