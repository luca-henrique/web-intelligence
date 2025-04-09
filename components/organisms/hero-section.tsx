"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import placeholder from "@/public/images/placeholder.svg"

export function HeroSection() {
  const { t } = useTranslation()

  const stats = [
    { label: t("stats.projectsCompleted"), value: "500+" },
    { label: t("stats.yearsExperience"), value: "10+" },
    { label: t("stats.teamMembers"), value: "50+" },
    { label: t("stats.clientSatisfaction"), value: "99%" },
  ]

  return (
    <section
      id="home"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative">
        <div className="absolute top-0 right-0 -z-10 h-72 w-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <Badge className="w-fit bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
              {t("hero.badge")}
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{t("hero.title")}</h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">{t("hero.description")}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#contact">{t("actions.getStarted")}</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full group">
                <Link href="#services" className="flex items-center">
                  {t("actions.learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={placeholder}
                      width={40}
                      height={40}
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-blue-600">500+</span> {t("hero.satisfiedClients")}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="absolute -z-10 h-72 w-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-xl bg-blue-100 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-blue-200 -z-10"></div>
              <Image
                src={placeholder}
                width={550}
                height={550}
                alt="Hero Image"
                className="rounded-xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

