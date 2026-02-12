import React from 'react'

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
)

export default Container
