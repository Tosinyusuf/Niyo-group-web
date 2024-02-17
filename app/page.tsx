"use client"
import { split } from '@/animation/common'
import LandingHeader from '@/components/header'
import { navLinks } from '@/configs/landing'
import FooterSection from '@/templates/footer'
import HeroSection from '@/templates/hero'
import Section2 from '@/templates/section2'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    split()
  }, [])
  return (
    <main>
      <LandingHeader navLinks={navLinks} waitlist='kojij' />
      <HeroSection />
      <Section2 />
      <FooterSection />
    </main>
  )
}
