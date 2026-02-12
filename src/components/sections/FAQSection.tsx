import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import Accordion from '../ui/Accordion'
import Reveal from '../motion/Reveal'

const FAQSection: React.FC = () => {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>

  return (
    <Section id="faq" variant="neutral">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('faq.title')}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              {t('faq.title')}
            </h2>
          </div>
        </Reveal>
        <Reveal className="mt-10" y={18}>
          <Accordion
            items={items.map((item, index) => ({
              id: `faq-${index}`,
              title: item.q,
              content: item.a,
            }))}
            defaultOpenId="faq-0"
          />
        </Reveal>
      </Container>
    </Section>
  )
}

export default FAQSection
