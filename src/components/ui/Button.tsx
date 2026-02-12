import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export const buttonStyles = (variant: ButtonVariant = 'primary', className = '') => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--primary),0.45)]'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-[linear-gradient(120deg,rgb(var(--primary)),rgb(var(--accent)),rgb(var(--secondary)))] text-slate-900 shadow-[0_16px_40px_rgba(var(--primary),0.25)] hover:opacity-90',
    secondary:
      'border border-[rgba(var(--border),0.7)] bg-[rgba(var(--surface),0.7)] text-[rgb(var(--text))] hover:border-[rgba(var(--primary),0.5)] hover:bg-[rgba(var(--surface),0.85)]',
    ghost:
      'text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]',
  }

  return `${base} ${variants[variant]} ${className}`.trim()
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => (
  <button type="button" className={buttonStyles(variant, className)} {...props} />
)

export default Button
