import React from 'react'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import Card from '../ui/Card'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true }) as Array<{
    name: string
    role: string
    quote: string
  }>

  return (
    <Section variant="neutral">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('testimonials.title')}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              {t('testimonials.title')}
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={`testimonial-${index}`} withParent y={18} delay={index * 0.05}>
              <Card tone="neutral">
                <div className="star-shimmer flex items-center gap-1 text-amber-400">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}

export default TestimonialsSection
