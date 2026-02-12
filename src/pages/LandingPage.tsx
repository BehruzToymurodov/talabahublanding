import React, { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import ProblemSection from '../components/sections/ProblemSection'
import SolutionSection from '../components/sections/SolutionSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import PartnersSection from '../components/sections/PartnersSection'
import AppPreviewSection from '../components/sections/AppPreviewSection'
import DemoSection from '../components/sections/DemoSection'
import FinancialBenefitsSection from '../components/sections/FinancialBenefitsSection'
import TeamSection from '../components/sections/TeamSection'
import RoadmapSection from '../components/sections/RoadmapSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FAQSection from '../components/sections/FAQSection'

type LandingPageProps = {
  initialSection?: string
}

const LandingPage: React.FC<LandingPageProps> = ({ initialSection }) => {
  useEffect(() => {
    if (!initialSection) return
    const element = document.getElementById(initialSection)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [initialSection])

  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <DemoSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PartnersSection />
      <AppPreviewSection />
      <TeamSection />
      <FinancialBenefitsSection />
      <RoadmapSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default LandingPage
