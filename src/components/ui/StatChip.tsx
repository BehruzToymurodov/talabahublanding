import React from 'react'

type StatChipProps = {
  label: string
  className?: string
  variant?: 'blue' | 'green' | 'teal' | 'amber' | 'neutral'
}

const StatChip: React.FC<StatChipProps> = ({ label, className = '', variant = 'blue' }) => (
  <div
    className={`chip chip--${variant} ${className}`}
  >
    <span className="chip-dot" />
    {label}
  </div>
)

export default StatChip
