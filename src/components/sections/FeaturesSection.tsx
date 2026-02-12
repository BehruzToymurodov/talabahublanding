import React from 'react'
import { BarChart3, Lock, Smartphone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import Card from '../ui/Card'
import IconCircle from '../ui/IconCircle'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'

const icons = [BarChart3, Lock, Smartphone]
const tones: Array<'blue' | 'green' | 'teal'> = ['blue', 'teal', 'green']

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as Array<{ title: string; text: string }>

  return (
    <Section variant="soft">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('features.title')}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              {t('features.subtitle')}
            </h2>
          </div>
        </Reveal>
        <Stagger className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={`feature-${index}`} withParent y={18} delay={index * 0.05}>
                <Card className="card-border-strong flex h-full flex-col" tone={tones[index % tones.length]}>
                  <IconCircle variant={tones[index % tones.length]}>
                    <Icon size={20} />
                  </IconCircle>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{item.text}</p>
                </Card>
              </Reveal>
            )
          })}
        </Stagger>
      </Container>
    </Section>
  )
}

export default FeaturesSection
