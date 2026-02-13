import { ArrowRight, CheckCircle2 } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../layout/Container'
import Section from '../layout/Section'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'
import Card from '../ui/Card'
import GlassPanel from '../ui/GlassPanel'

const SolutionSection: React.FC = () => {
	const { t } = useTranslation()
	const features = t('solution.features', { returnObjects: true }) as string[]
	const featureDescriptions = t('solution.featureDescriptions', {
		returnObjects: true,
	}) as string[]
	const tones: Array<'blue' | 'green' | 'teal'> = ['green', 'teal', 'blue']

	return (
		<Section id='yechim' variant='solution'>
			<Container>
				<Reveal>
					<div className='flex flex-col gap-4'>
						<p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500'>
							{t('solution.title')}
						</p>
						<h2 className='text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl'>
							{t('solution.headline')}
						</h2>
					</div>
				</Reveal>

				<Reveal className='mt-10' y={26}>
					<GlassPanel className='relative overflow-hidden rounded-[32px] p-8'>
						<div className='absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-500/20' />
						<div className='relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
							<div>
								<p className='text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400'>
									TalabaHub
								</p>
								<h3 className='mt-3 text-2xl font-semibold text-slate-900 dark:text-white'>
									{t('solution.headline')}
								</h3>
								<div className='mt-6 flex flex-wrap items-center gap-4 text-sm'>
									<span className='rounded-full bg-white/60 px-4 py-2 text-slate-700 dark:bg-white/10 dark:text-slate-200'>
										{t('solution.before')}
									</span>
									<ArrowRight className='text-cyan-400' size={18} />
									<span className='rounded-full bg-gradient-to-r from-cyan-400/40 to-indigo-400/40 px-4 py-2 text-slate-900 dark:text-white'>
										{t('solution.after')}
									</span>
								</div>
							</div>
							<div className='grid gap-4 sm:grid-cols-2'>
								<div className='glass-panel rounded-2xl p-4'>
									<p className='text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
										{t('solution.statBefore')}
									</p>
									<p className='mt-2 text-2xl font-semibold text-slate-900 dark:text-white'>
										{t('solution.statBeforeValue')}
									</p>
								</div>
								<div className='glass-panel rounded-2xl p-4'>
									<p className='text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
										{t('solution.statAfter')}
									</p>
									<p className='mt-2 text-2xl font-semibold text-slate-900 dark:text-white'>
										{t('solution.statAfterValue')}
									</p>
								</div>
							</div>
						</div>
					</GlassPanel>
				</Reveal>

				<div className='mt-12'>
					<Reveal>
						<p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500'>
							{t('solution.featuresTitle')}
						</p>
					</Reveal>
					<Stagger className='mt-6 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3'>
						{features.map((feature, index) => (
							<Reveal
								key={`solution-feature-${index}`}
								withParent
								y={18}
								delay={index * 0.04}
							>
								<Card
									className='card-border-strong flex h-full items-start gap-3'
									tone={tones[index % tones.length]}
								>
									<CheckCircle2
										className='mt-1 text-emerald-400 transition-transform duration-300 group-hover:rotate-6 motion-reduce:transform-none'
										size={18}
									/>
									<div>
										<h4 className='text-lg font-semibold text-slate-900 dark:text-white'>
											{feature}
										</h4>
										<p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
											{featureDescriptions[index] ?? t('solution.headline')}
										</p>
									</div>
								</Card>
							</Reveal>
						))}
					</Stagger>
				</div>
			</Container>
		</Section>
	)
}

export default SolutionSection
