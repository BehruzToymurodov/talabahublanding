import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import GlassPanel from '../ui/GlassPanel'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'

const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const steps = t('how.steps', { returnObjects: true }) as string[]
  const stepDescriptions = t('how.stepDescriptions', { returnObjects: true }) as string[]

  return (
    <Section id="qanday-ishlaydi" variant="how">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('how.title')}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              {t('how.subtitle')}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12">
          <Stagger className="relative flex flex-col gap-6" staggerChildren={0.1}>
            {steps.map((step, index) => (
              <Reveal key={`how-step-${index}`} withParent y={18} delay={index * 0.05}>
                <motion.div
                  className="flex items-start gap-6"
                  whileHover={!reducedMotion ? { x: 4 } : undefined}
                  transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-semibold text-white shadow-glow">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mt-3 connector-line motion-reduce:animate-none" />
                    )}
                  </div>
                  <GlassPanel className="flex-1 rounded-2xl px-6 py-5">
                    <p className="text-base font-semibold text-slate-900 dark:text-white">{step}</p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {stepDescriptions[index] ?? t('solution.headline')}
                    </p>
                  </GlassPanel>
                </motion.div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  )
}

export default HowItWorksSection
