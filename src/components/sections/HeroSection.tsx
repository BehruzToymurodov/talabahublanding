import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from 'framer-motion'
import { ChevronDown, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../layout/Container'
import Reveal from '../motion/Reveal'
import Stagger from '../motion/Stagger'
import { buttonStyles } from '../ui/Button'
import GlassPanel from '../ui/GlassPanel'
import StatChip from '../ui/StatChip'

const HeroSection: React.FC = () => {
	const { t } = useTranslation()
	const reducedMotion = useReducedMotion()
	const { scrollY } = useScroll()
	const blobY = useTransform(scrollY, [0, 600], [0, 60])
	const blobYSlow = useTransform(scrollY, [0, 600], [0, 30])

	const chips = [t('hero.chip1'), t('hero.chip2'), t('hero.chip3')]
	const chipVariants: Array<'blue' | 'green' | 'teal'> = [
		'blue',
		'green',
		'teal',
	]

	return (
		<section
			id='hero'
			className='section-base section-fog section-fog--hero pb-20 pt-36'
		>
			<div className='pointer-events-none absolute inset-0 overflow-hidden'>
				<motion.div
					aria-hidden
					className='absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl'
					style={{ y: reducedMotion ? 0 : blobY }}
					animate={
						reducedMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }
					}
					transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
				/>
				<motion.div
					aria-hidden
					className='absolute right-10 top-10 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl'
					style={{ y: reducedMotion ? 0 : blobYSlow }}
					animate={
						reducedMotion ? undefined : { x: [0, -14, 0], y: [0, 14, 0] }
					}
					transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
				/>
				<motion.div
					aria-hidden
					className='absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl'
					style={{ y: reducedMotion ? 0 : blobY }}
					animate={reducedMotion ? undefined : { x: [0, 10, 0], y: [0, 10, 0] }}
					transition={{ duration: 44, repeat: Infinity, ease: 'easeInOut' }}
				/>
			</div>
			<Container>
				<div className='grid gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
					<Stagger animateOnMount>
						<Reveal withParent>
							<p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500'>
								TalabaHub
							</p>
						</Reveal>
						<Reveal withParent>
							<h1 className='mt-4 text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl'>
								<span className='text-gradient'>{t('hero.title')}</span>
							</h1>
						</Reveal>
						<Reveal withParent>
							<p className='mt-5 max-w-xl text-base text-slate-600 dark:text-slate-300'>
								{t('hero.subtitle')}
							</p>
						</Reveal>

						<Reveal withParent>
							<div className='mt-4 flex max-w-xl flex-col gap-1 text-sm text-slate-600 dark:text-slate-300'>
								<span className='font-semibold text-slate-800 dark:text-slate-100'>
									{t('hero.statsLine')}
								</span>
								<span className='text-xs text-slate-500 dark:text-slate-400'>
									{t('hero.statsSource')}
								</span>
							</div>
						</Reveal>

						<Reveal withParent>
							<div className='mt-6 flex flex-wrap gap-3'>
								{chips.map((chip, index) => (
									<StatChip
										key={`hero-chip-${index}`}
										label={chip}
										variant={chipVariants[index % chipVariants.length]}
									/>
								))}
							</div>
						</Reveal>

						<Reveal withParent>
							<div className='mt-8 flex flex-wrap gap-4'>
								<a
									href='https://talaba-hub.vercel.app/'
									className={buttonStyles('primary')}
								>
									{t('hero.ctaPrimary')}
								</a>
								<a
									href='#demo'
									className={buttonStyles('secondary')}
									onClick={event => {
										event.preventDefault()
										document
											.getElementById('demo')
											?.scrollIntoView({ behavior: 'smooth' })
									}}
								>
									{t('hero.ctaSecondary')}
								</a>
							</div>
						</Reveal>
					</Stagger>

					<Reveal className='relative' y={28} blur={8} duration={0.7}>
						<GlassPanel className='relative overflow-hidden rounded-[32px] p-8'>
							<div className='absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-indigo-500/20' />
							<div className='relative space-y-6'>
								<div className='flex items-center gap-3'>
									<div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-500'>
										<Zap size={20} />
									</div>
									<div>
										<p className='text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400'>
											{t('hero.panelTag')}
										</p>
										<p className='text-lg font-semibold text-slate-900 dark:text-white'>
											{t('hero.panelTitle')}
										</p>
									</div>
								</div>
								<div className='grid gap-4 sm:grid-cols-2'>
									<div className='glass-panel rounded-2xl p-4'>
										<div className='flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100'>
											<ShieldCheck size={16} className='text-emerald-400' />
											{t('hero.panelSecureTitle')}
										</div>
										<p className='mt-2 text-xs text-slate-500 dark:text-slate-400'>
											{t('hero.panelSecureText')}
										</p>
									</div>
									<div className='glass-panel rounded-2xl p-4'>
										<div className='flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100'>
											<Sparkles size={16} className='text-indigo-400' />
											{t('hero.panelPersonalTitle')}
										</div>
										<p className='mt-2 text-xs text-slate-500 dark:text-slate-400'>
											{t('hero.panelPersonalText')}
										</p>
									</div>
								</div>
								<div className='glass-panel rounded-2xl p-4'>
									<div className='flex items-center justify-between text-xs text-slate-500 dark:text-slate-400'>
										<span>{t('hero.panelAccessLabel')}</span>
										<span>80%</span>
									</div>
									<div className='mt-3 h-2 rounded-full bg-white/40'>
										<div className='h-2 w-5/6 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400' />
									</div>
								</div>
							</div>
						</GlassPanel>
						<div className='absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cyan-400/30 blur-2xl' />
						<div className='absolute -bottom-8 left-10 h-24 w-24 rounded-full bg-indigo-400/30 blur-2xl' />
					</Reveal>
				</div>

				<Reveal className='mt-16'>
					<div className='flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400'>
						<ChevronDown
							size={16}
							className='animate-bounce motion-reduce:animate-none'
						/>
						{t('hero.scrollHint')}
					</div>
				</Reveal>
			</Container>
		</section>
	)
}

export default HeroSection
