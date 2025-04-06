"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import i18n from "@/i18n/config"
import { Header } from "@/components/organisms/header"
import { HeroSection } from "@/components/organisms/hero-section"
import { TechnologiesSection } from "@/components/organisms/technologies-section"
import { SocialMediaSection } from "@/components/organisms/social-media-section"
import { Footer } from "@/components/organisms/footer"

export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    const lang = pathname.split("/")[1]
    if (lang && ["en", "pt", "es"].includes(lang)) {
      i18n.changeLanguage(lang)
    }
  }, [pathname])


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Add other sections here */}
        <TechnologiesSection />
        <SocialMediaSection />
        {/* Add more sections */}
      </main>
      <Footer />
    </div>
  )
}

