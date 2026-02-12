import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import GlassPanel from '../ui/GlassPanel'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'

const AppPreviewSection: React.FC = () => {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const phoneY = useTransform(scrollY, [0, 800], [0, -30])
  const bullets = t('appPreview.bullets', { returnObjects: true }) as string[]
  const screens = t('appPreview.screens', { returnObjects: true }) as string[]
  const [activeIndex, setActiveIndex] = useState(0)
  const previewLabels = screens.length ? screens.slice(0, 3) : ['Screen 1', 'Screen 2', 'Screen 3']
  const previewCards = previewLabels.map((label, index) => ({
    label,
    text: bullets[index] ?? t('appPreview.mockSubtitle')
  }))

  useEffect(() => {
    if (reducedMotion) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % previewLabels.length)
    }, 2800)

    return () => clearInterval(timer)
  }, [previewLabels.length, reducedMotion])

  return (
    <Section variant="solution">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal y={24}>
            <GlassPanel className="relative flex items-center justify-center overflow-hidden rounded-[32px] px-6 py-12">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-indigo-500/20" />
              <motion.div
                className="relative w-full max-w-[320px]"
                style={{ y: reducedMotion ? 0 : phoneY }}
                animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="mx-auto h-[520px] w-full rounded-[36px] border border-cyan-400/30 bg-white/30 p-4 shadow-soft backdrop-blur dark:border-cyan-400/30 dark:bg-white/5">
                  <div className="mx-auto mb-4 h-2 w-24 rounded-full bg-white/40" />
                  <div className="relative h-[440px] overflow-hidden rounded-[28px] border border-white/30 bg-white/20 shadow-inner dark:border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/25 via-indigo-500/10 to-slate-900/20" />
                    <div className="relative flex h-full flex-col gap-4 p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl bg-white/60 shadow-sm" />
                        <div className="space-y-2">
                          <div className="h-3 w-28 rounded-full bg-white/60" />
                          <div className="h-2 w-20 rounded-full bg-white/40" />
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/30 bg-white/50 p-3 text-xs font-semibold text-slate-700 shadow-sm">
                        {t('appPreview.mockTitle')}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 rounded-2xl bg-white/40" />
                        <div className="h-20 rounded-2xl bg-white/30" />
                      </div>
                      <div className="mt-auto space-y-3">
                        {[0, 1, 2].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/30 bg-white/40 p-3 text-[11px] text-slate-700"
                          >
                            {t('appPreview.mockSubtitle')}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-10 -top-8 h-24 w-24 rounded-full bg-cyan-400/40 blur-2xl" />
              </motion.div>
            </GlassPanel>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('appPreview.title')}</p>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
                  {t('appPreview.subtitle')}
                </h2>
              </div>
            </Reveal>

            <Stagger as="ul" className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {bullets.map((bullet, index) => (
                <Reveal key={`bullet-${index}`} as="li" withParent y={16} delay={index * 0.05}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/30 text-emerald-500">
                      <Check size={14} />
                    </span>
                    {bullet}
                  </div>
                </Reveal>
              ))}
            </Stagger>

            <Reveal className="mt-10" y={18}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {t('appPreview.screensLabel')}
              </p>
              <div className="relative mt-4 h-60 overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/30 p-6 backdrop-blur dark:border-cyan-400/30 dark:bg-white/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: reducedMotion ? 0 : 0.4 }}
                    className="flex h-full flex-col justify-between"
                  >
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {previewCards[activeIndex]?.label}
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                      {previewCards.map((card, index) => (
                        <div
                          key={`${card.label}-${index}`}
                          className={`relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-white/50 p-4 shadow-inner transition-all dark:border-cyan-400/30 dark:bg-white/10 ${
                            activeIndex === index
                              ? 'scale-[1.02] ring-2 ring-cyan-400/60'
                              : 'opacity-85 hover:opacity-100'
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-500/20" />
                          <div className="relative flex h-full flex-col gap-3">
                            <div className="flex items-center gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-600">
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                              </span>
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">{card.label}</p>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-300">{card.text}</p>
                            <div className="mt-auto flex items-center gap-2">
                              <span className="h-2 w-12 rounded-full bg-cyan-400/40" />
                              <span className="h-2 w-6 rounded-full bg-cyan-400/20" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default AppPreviewSection
