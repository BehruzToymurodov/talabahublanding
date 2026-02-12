import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../app/providers/ThemeProvider'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(var(--border),0.5)] bg-[rgba(var(--surface),0.55)] text-[rgb(var(--text))] backdrop-blur transition hover:bg-[rgba(var(--surface),0.7)]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

export default ThemeToggle
