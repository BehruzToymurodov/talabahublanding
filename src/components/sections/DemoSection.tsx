import { Play } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../layout/Container'
import Section from '../layout/Section'
import Reveal from '../motion/Reveal'
import { buttonStyles } from '../ui/Button'

const demoEmbedUrl = 'https://www.youtube.com/embed/XJk2enmrZ7U'
const demoLinkUrl = 'https://youtu.be/XJk2enmrZ7U'

const DemoSection: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Section id='demo' variant='demo'>
			<Container>
				<Reveal>
					<div className='flex flex-col gap-4'>
						<p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500'>
							{t('demo.title')}
						</p>
						<h2 className='text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl'>
							{t('demo.subtitle')}
						</h2>
					</div>
				</Reveal>

				<Reveal className='mt-8' y={22}>
					<div className='shimmer-border overflow-hidden rounded-[32px] border border-cyan-400/30 bg-white/30 p-3 backdrop-blur dark:border-cyan-400/30 dark:bg-white/5'>
						<div className='relative aspect-video w-full overflow-hidden rounded-3xl'>
							<iframe
								className='h-full w-full'
								src={demoEmbedUrl}
								title={t('demo.title')}
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							/>
						</div>
					</div>
				</Reveal>

				<Reveal className='mt-6'>
					<a
						href={demoLinkUrl}
						target='_blank'
						rel='noreferrer'
						className={buttonStyles('primary')}
					>
						<Play size={16} />
						{t('demo.open')}
					</a>
				</Reveal>
			</Container>
		</Section>
	)
}

export default DemoSection
