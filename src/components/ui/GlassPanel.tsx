import React from 'react'

type GlassPanelProps = {
  children: React.ReactNode
  className?: string
}

const GlassPanel: React.FC<GlassPanelProps> = ({ children, className = '' }) => (
  <div className={`glass-panel rounded-3xl ${className}`}>{children}</div>
)

export default GlassPanel
