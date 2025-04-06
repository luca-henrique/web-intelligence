"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { key: "navigation.home", href: "#home" },
    { key: "navigation.services", href: "#services" },
    { key: "navigation.process", href: "#process" },
    { key: "navigation.technologies", href: "#technologies" },
    { key: "navigation.projects", href: "#projects" },
    { key: "navigation.testimonials", href: "#testimonials" },
  ]


  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-200 ${scrolled ? "shadow-sm" : ""
        }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-blue-600 text-white">
            <Lightbulb className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <span className="text-xl font-bold">
            Web<span className="text-blue-600">Intelligence</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors relative group"
            >
              {t(item.key)}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          {t("navigation.home")}

        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button asChild className="rounded-full px-6">
            <Link href="#contact">{t("navigation.contact")}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

