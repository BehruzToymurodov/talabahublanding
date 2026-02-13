import React from 'react'
import { TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import Card from '../ui/Card'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'

const gradients = [
  'from-emerald-400/60 to-cyan-400/40',
  'from-indigo-400/60 to-cyan-400/40',
  'from-orange-400/60 to-pink-400/40',
  'from-violet-400/60 to-fuchsia-400/40',
]

const FinancialBenefitsSection: React.FC = () => {
  const { t } = useTranslation()
  const items = t('financial.items', { returnObjects: true }) as Array<{
    title: string
    text: string
  }>

  return (
    <Section id="moliyaviy-foyda" variant="neutral">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('financial.title')}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              {t('financial.title')}
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={`benefit-${index}`} withParent y={18} delay={index * 0.05}>
              <Card className="card-border-strong overflow-hidden p-0" tone="neutral">
                <div className={`h-2 w-full bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <span className="text-emerald-500" aria-hidden="true">
                      <TrendingUp size={16} />
                    </span>
                  </div>
                  <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}

export default FinancialBenefitsSection
