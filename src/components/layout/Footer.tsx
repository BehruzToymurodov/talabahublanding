import React from 'react'
import { MessageCircle, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Container from './Container'
import Reveal from '../motion/Reveal'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const links = [
    { id: 'demo', label: t('nav.demo') },
    { id: 'muammo', label: t('nav.problem') },
    { id: 'yechim', label: t('nav.solution') },
    { id: 'qanday-ishlaydi', label: t('nav.how') },
    { id: 'faq', label: t('nav.faq') },
  ]

  const handleScroll = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <footer className="relative pb-16 pt-10">
      <Container>
        <Reveal>
          <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/90 px-6 py-10 text-slate-100 shadow-soft backdrop-blur">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
              <div>
                <div className="text-xl font-semibold text-white">TalabaHub</div>
                <p className="mt-3 text-base text-slate-200">{t('footer.tagline')}</p>
                <p className="mt-6 text-sm text-slate-400">© 2026 TalabaHub. {t('footer.rights')}</p>
              </div>
              <div>
                <p className="text-base font-semibold text-white">{t('footer.links')}</p>
                <div className="mt-3 flex flex-col gap-2 text-base text-slate-200">
                  {links.map((link) => (
                    <a key={link.id} href={`#${link.id}`} onClick={handleScroll(link.id)} className="transition hover:text-white">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-base font-semibold text-white">{t('footer.contact')}</p>
                <div className="mt-3 flex items-center gap-2 text-base text-slate-200">
                  <Mail size={16} />
                  <span>{t('footer.email')}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <button
        type="button"
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-white shadow-glow motion-reduce:animate-none animate-[breathe_4s_ease-in-out_infinite]"
        aria-label="Chat"
      >
        <MessageCircle size={18} />
      </button>
    </footer>
  )
}

export default Footer
