import React from 'react'
import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import Container from '../layout/Container'
import Card from '../ui/Card'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'
import behruzImg from '../../assets/teammates/bekhruz.jpg'
import sardorImg from '../../assets/teammates/sardor.jpg'
import khushnudImg from '../../assets/teammates/khushnud.jpg'

const TeamSection: React.FC = () => {
  const { t } = useTranslation()
  const members = t('team.members', { returnObjects: true }) as Array<{
    name: string
    role: string
  }>
  const images = [behruzImg, sardorImg, khushnudImg]

  return (
    <Section id="jamoa" variant="soft">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">{t('team.title')}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              {t('team.subtitle')}
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={`team-${index}`} withParent y={18} delay={index * 0.05}>
              <Card className="card-border-strong flex h-full flex-col items-center gap-5 text-center" tone="teal">
                <div className="h-48 w-48 rounded-full border-2 border-cyan-400/40 p-1 sm:h-56 sm:w-56">
                  <img
                    src={images[index] ?? images[0]}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="mt-1 text-base text-slate-500 dark:text-slate-300">{member.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}

export default TeamSection
