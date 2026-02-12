import React from 'react'
import { ArrowUpRight, Check, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import Reveal from '../components/motion/Reveal'
import Stagger from '../components/motion/Stagger'
import GlassPanel from '../components/ui/GlassPanel'
import { buttonStyles } from '../components/ui/Button'
import logo from '../assets/logo/talabahub.png'

const demoVideoUrl = 'https://www.youtube.com/embed/XJk2enmrZ7U'
const platformUrl = 'https://talaba-hub.vercel.app'

const outcomes = [
  'Talabalar kundalik xarajatlarini kamaytiradi.',
  'Kompaniyalar yangi mijozlar oqimini oladi.',
  'Chegirmalar shaffof va boshqariladigan tizim orqali ishlaydi.',
]

const technologies = [
  'React + Vite asosidagi web platforma',
  'React Native yordamida mobil ilova',
  'FastAPI / Node backend arxitekturasi',
  "PostgreSQL ma'lumotlar bazasi",
  'Real-time chegirma kodlari va QR tizimi',
  'API orqali hamkor kompaniyalar integratsiyasi',
  'Admin panel orqali chegirma va filiallarni boshqarish',
]

const features = [
  'Talaba statusini tasdiqlash',
  'Chegirmalarni qidirish va filtrlash',
  'QR yoki kod orqali chegirmadan foydalanish',
  'Saqlangan chegirmalar',
  'Kompaniya admin paneli',
  'Statistik foydalanish hisobotlari',
]

const nextSteps = [
  'Universitetlar bilan integratsiya',
  "Ko'proq hamkor kompaniyalarni qo'shish",
  'Mobil ilovani kengaytirish',
  "To'lov tizimlari integratsiyasi",
  'Kengaytirilgan analytics va tavsiya tizimi',
  'Platformani tijorat miqyosiga olib chiqish',
]

const DemoPage: React.FC = () => {
  const demoVideoReady = !demoVideoUrl.includes('VIDEO_ID')

  return (
    <div className="relative">
      <header className="pt-6">
        <Container>
          <div className="flex items-center justify-between gap-4 rounded-full border border-[rgba(var(--border),0.6)] bg-[rgba(var(--surface),0.7)] px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 p-1 shadow-glow dark:bg-white/10">
                <img src={logo} alt="TalabaHub logo" className="h-full w-full rounded-full object-contain" />
              </div>
              <div className="text-sm font-semibold tracking-[0.08em] text-slate-900 dark:text-slate-100">
                TalabaHub
              </div>
            </Link>
            <Link to="/" className={buttonStyles('secondary')}>
              Bosh sahifaga qaytish
            </Link>
          </div>
        </Container>
      </header>

      <main>
        <Section variant="hero" className="pt-16 pb-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <Reveal>
                <div className="flex flex-col gap-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-500">Demo sahifa</p>
                  <h1 className="text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
                    TalabaHub Platformasi
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    Talabalar uchun mo'ljallangan maxsus chegirmalar va xizmatlardan foydalanish tizimining
                    to'liq ishlash jarayoni bilan tanishing.
                  </p>
                </div>
              </Reveal>

              <Reveal y={18}>
                <GlassPanel className="relative overflow-hidden p-8">
                  <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full bg-cyan-400/30 blur-3xl" />
                  <div className="absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-emerald-400/25 blur-3xl" />
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    TalabaHub
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                    Talabalar uchun yagona raqamli chegirmalar ekotizimi
                  </h2>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    TalabaHub — Talabalar hayotini qulayroq va tejamkor qiladigan yangi avlod chegirmalar platformasi.
                  </p>
                </GlassPanel>
              </Reveal>
            </div>
          </Container>
        </Section>

        <Section variant="demo">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <Reveal>
                <div className="shimmer-border overflow-hidden rounded-[32px] border border-cyan-400/30 bg-white/30 p-3 backdrop-blur dark:border-cyan-400/30 dark:bg-white/5">
                  <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
                    {demoVideoReady ? (
                      <iframe
                        className="h-full w-full"
                        src={demoVideoUrl}
                        title="TalabaHub demo video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-slate-900/70 text-center text-sm text-slate-100">
                        <div className="flex flex-col items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                            <Play size={18} />
                          </span>
                          <p>Video havolasi keyinroq qo'shiladi.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>

              <Reveal y={18}>
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-500">Videoda nima ko'rsatilgan</p>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
                    TalabaHub platformasining to'liq ishlash jarayoni
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Ushbu video TalabaHub platformasining to'liq ishlash jarayonini namoyish etadi. Talaba sifatida
                    tizimga ro'yxatdan o'tish, talabalik maqomini tasdiqlash, hamkor do'konlar, restoranlar, food
                    marketlar va xizmat ko'rsatish markazlaridagi chegirmalarni topish hamda ulardan foydalanish
                    jarayoni real vaqt rejimida ko'rsatiladi.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Shuningdek, har bir chegirma uchun maxsus kod yoki QR orqali to'lov vaqtida chegirmadan foydalanish,
                    saqlangan chegirmalarni boshqarish va shaxsiy kabinet orqali barcha foydalanilgan chegirmalarni
                    kuzatish imkoniyati batafsil tushuntiriladi.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Hamkor kompaniyalar esa o'z admin paneli orqali chegirmalarni qo'shish, filiallar bo'yicha aksiyalarni
                    boshqarish va talabalar oqimini monitoring qilish imkoniyatiga ega bo'ladi.
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        <Section variant="soft">
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal>
                <GlassPanel className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Muammo va yechimga qanday bog'liqligi
                  </h3>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    Bugungi kunda ko'plab talabalar kundalik xarajatlarda chegirma imkoniyatlaridan bexabar yoki ulardan
                    foydalanish qiyin. Kompaniyalar esa talabalar uchun maxsus takliflar yaratishni xohlasalar ham, buni
                    samarali tarqatish platformasiga ega emas.
                  </p>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    TalabaHub aynan shu muammoni hal qilish uchun yaratilgan. Platforma orqali talabalar uchun maxsus
                    chegirmalar bir joyda jamlanadi va faqat tasdiqlangan talabalar ulardan foydalanishi mumkin bo'ladi.
                  </p>
                </GlassPanel>
              </Reveal>

              <Reveal>
                <GlassPanel className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Natijada</h3>
                  <Stagger as="ul" className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {outcomes.map((item, index) => (
                      <Reveal key={item} as="li" withParent y={16} delay={index * 0.05}>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/30 text-emerald-500">
                            <Check size={14} />
                          </span>
                          {item}
                        </div>
                      </Reveal>
                    ))}
                  </Stagger>
                </GlassPanel>
              </Reveal>

              <Reveal>
                <GlassPanel className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Ishlatilgan texnologiyalar va platforma yechimlari
                  </h3>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    TalabaHub zamonaviy texnologiyalar asosida qurilgan:
                  </p>
                  <Stagger as="ul" className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {technologies.map((item, index) => (
                      <Reveal key={item} as="li" withParent y={16} delay={index * 0.05}>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/30 text-cyan-600">
                            <Check size={14} />
                          </span>
                          {item}
                        </div>
                      </Reveal>
                    ))}
                  </Stagger>
                </GlassPanel>
              </Reveal>

              <Reveal>
                <GlassPanel className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Tizimda quyidagi funksiyalar mavjud</h3>
                  <Stagger as="ul" className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {features.map((item, index) => (
                      <Reveal key={item} as="li" withParent y={16} delay={index * 0.05}>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-400/30 text-indigo-500">
                            <Check size={14} />
                          </span>
                          {item}
                        </div>
                      </Reveal>
                    ))}
                  </Stagger>
                </GlassPanel>
              </Reveal>

              <Reveal>
                <GlassPanel className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Loyiha holati</h3>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    Loyiha hozirda MVP/prototype bosqichida.
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Keyingi qadamlar
                  </p>
                  <Stagger as="ul" className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {nextSteps.map((item, index) => (
                      <Reveal key={item} as="li" withParent y={16} delay={index * 0.05}>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/30 text-amber-600">
                            <Check size={14} />
                          </span>
                          {item}
                        </div>
                      </Reveal>
                    ))}
                  </Stagger>
                </GlassPanel>
              </Reveal>
            </div>
          </Container>
        </Section>

        <Section variant="demo" className="pb-24">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 px-8 py-10 text-center text-white shadow-soft sm:px-10">
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/25 blur-3xl" />
                <div className="absolute -bottom-10 right-4 h-32 w-32 rounded-full bg-cyan-400/25 blur-3xl" />
                <h2 className="text-2xl font-semibold sm:text-3xl">O'zingiz sinab ko'ring</h2>
                <p className="mt-3 text-sm text-slate-200 sm:text-base">
                  Platformaning to'liq funksional demosini ishlatib ko'ring va risk baholash jarayonini o'z ko'zingiz bilan
                  ko'ring.
                </p>
                <div className="mt-6 flex justify-center">
                  <a href={platformUrl} target="_blank" rel="noreferrer" className={buttonStyles('primary')}>
                    Platformaga o'tish
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
    </div>
  )
}

export default DemoPage
