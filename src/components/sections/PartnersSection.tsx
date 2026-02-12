import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import GlassPanel from '../ui/GlassPanel'
import Reveal from '../motion/Reveal'

import beelineLogo from '../../assets/brands/beeline.jpg'
import korzinkaLogo from '../../assets/brands/korzinka.png'
import kfcLogo from '../../assets/brands/KFC.png'
import basilicLogo from '../../assets/brands/basilic.png'
import choparLogo from '../../assets/brands/chopar.avif'
import evosLogo from '../../assets/brands/evos.png'
import feedupLogo from '../../assets/brands/feedup.jpg'
import havasLogo from '../../assets/brands/havas.jpg'
import loookLogo from '../../assets/brands/loook.png'
import safiaLogo from '../../assets/brands/safia.png'

const partners = [
  { name: 'Beeline', logo: beelineLogo },
  { name: 'Korzinka', logo: korzinkaLogo },
  { name: 'KFC', logo: kfcLogo },
  { name: 'Basilic', logo: basilicLogo },
  { name: 'Chopar', logo: choparLogo },
  { name: 'Evos', logo: evosLogo },
  { name: 'FeedUp', logo: feedupLogo },
  { name: 'Havas', logo: havasLogo },
  { name: 'Loook', logo: loookLogo },
  { name: 'Safia', logo: safiaLogo },
]

const PartnersSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Section variant="soft">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('partners.title')}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              {t('partners.subtitle')}
            </h2>
          </div>
        </Reveal>
        <Reveal className="mt-10" y={20}>
          <motion.div transition={{ duration: 0.3 }}>
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
              <GlassPanel className="group overflow-hidden rounded-[32px] px-4 py-6 sm:px-8 lg:px-12">
                <div className="fade-mask flex w-max animate-marquee gap-6 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
                  {[...partners, ...partners].map((partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="flex h-20 min-w-[170px] items-center justify-center rounded-2xl border border-cyan-400/30 bg-white/60 px-4 text-base font-semibold text-slate-700 backdrop-blur transition-shadow duration-300 dark:border-cyan-200/40 dark:bg-white/10 dark:text-slate-100"
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-14 w-36 object-contain sm:h-16 sm:w-40"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </Section>
  )
}

export default PartnersSection
