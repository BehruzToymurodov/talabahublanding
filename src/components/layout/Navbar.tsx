import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Container from './Container'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import ThemeToggle from '../ui/ThemeToggle'
import ScrollProgress from '../motion/ScrollProgress'
import logo from '../../assets/logo/talabahub.png'

const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    let frame: number | null = null
    const update = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const anchor = window.innerHeight * 0.35
        let nextActive = elements[0]?.id ?? sectionIds[0]

        for (const element of elements) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= anchor && rect.bottom >= anchor) {
            nextActive = element.id
            break
          }
          if (rect.top <= anchor) {
            nextActive = element.id
          }
        }

        setActiveId((prev) => (prev === nextActive ? prev : nextActive))
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [sectionIds])

  return activeId
}

const Navbar: React.FC = () => {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 120], ['rgba(var(--surface),0.6)', 'rgba(var(--surface),0.92)'])
  const navItems = useMemo(
    () => [
      { id: 'demo', label: t('nav.demo') },
      { id: 'muammo', label: t('nav.problem') },
      { id: 'yechim', label: t('nav.solution') },
      { id: 'qanday-ishlaydi', label: t('nav.how') },
      { id: 'jamoa', label: t('nav.team') },
      { id: 'moliyaviy-foyda', label: t('nav.finance') },
      { id: 'yol-xaritasi', label: t('nav.roadmap') },
      { id: 'faq', label: t('nav.faq') },
    ],
    [t],
  )

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems])
  const activeId = useActiveSection(sectionIds)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const handler = () => setMobileOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [mobileOpen])

  const handleNavClick = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
    }
    setMobileOpen(false)
  }

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <ScrollProgress />
      <Container>
        <motion.div
          className="mt-6 flex items-center justify-between gap-6 rounded-full border border-[rgba(var(--border),0.6)] bg-transparent px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur dark:shadow-[0_10px_30px_rgba(2,6,23,0.4)]"
          style={{ backgroundColor: navBg }}
          transition={{ duration: reducedMotion ? 0 : 0.3, ease: 'easeOut' }}
        >
          <a
            href="#hero"
            onClick={handleNavClick('hero')}
            className="flex items-center gap-3"
            aria-label="Go to hero section"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 p-1 shadow-glow dark:bg-white/10">
              <img src={logo} alt="TalabaHub logo" className="h-full w-full rounded-full object-contain" />
            </div>
            <div className="text-sm font-semibold tracking-[0.08em] text-slate-900 dark:text-slate-100">
              TalabaHub
            </div>
          </a>

          <LayoutGroup>
            <nav className="hidden max-w-[58vw] flex-wrap items-center justify-center gap-1.5 rounded-full border border-[rgba(var(--border),0.35)] bg-[rgba(var(--surface),0.5)] px-2 py-2 text-[11px] font-medium text-[rgb(var(--muted))] backdrop-blur lg:flex xl:text-xs">
              {navItems.map((item) => {
                const isActive = activeId === item.id
                return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  className={`relative rounded-full px-3 py-2 text-slate-700 transition-colors duration-200 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white ${
                    isActive ? 'text-slate-900 dark:text-slate-900' : ''
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/85 via-sky-300/75 to-indigo-400/85 shadow-[0_6px_16px_rgba(56,189,248,0.35)]"
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    />
                  )}
                  <span className="relative z-10 leading-tight">{item.label}</span>
                </a>
                )
              })}
            </nav>
          </LayoutGroup>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(var(--border),0.5)] bg-[rgba(var(--surface),0.45)] text-[rgb(var(--text))] backdrop-blur transition hover:bg-[rgba(var(--surface),0.65)] lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mt-4 px-4 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="glass-panel rounded-3xl p-4">
              <div className="flex flex-col gap-2 text-sm">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={handleNavClick(item.id)}
                    className={`rounded-2xl px-4 py-2 text-left transition ${
                      activeId === item.id
                        ? 'bg-gradient-to-r from-cyan-400/30 via-emerald-400/20 to-indigo-400/30 text-slate-900 dark:text-white'
                        : 'text-slate-600 dark:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
