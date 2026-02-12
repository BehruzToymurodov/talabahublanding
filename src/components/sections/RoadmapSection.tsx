import React from 'react'
import { Flag } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import GlassPanel from '../ui/GlassPanel'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'

const RoadmapSection: React.FC = () => {
  const { t } = useTranslation()
  const phases = t('roadmap.phases', { returnObjects: true }) as Array<{ title: string; text: string }>

  return (
    <Section id="yol-xaritasi" variant="soft">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('roadmap.title')}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              {t('roadmap.title')}
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-10 space-y-6" staggerChildren={0.1}>
          {phases.map((phase, index) => (
            <Reveal key={`roadmap-${index}`} withParent y={18} delay={index * 0.05}>
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-white">
                  <Flag size={14} />
                </div>
                {index < phases.length - 1 && (
                  <div className="absolute left-4 top-12 h-16 w-px border-l border-dashed border-cyan-300/60" />
                )}
                <GlassPanel className="rounded-2xl px-6 py-5">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.text}</p>
                </GlassPanel>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}

export default RoadmapSection
