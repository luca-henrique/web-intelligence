"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Check, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter, usePathname } from "next/navigation"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const languages = [
    { code: "pt", name: "Português (BR)" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    const newPath = pathname.replace(/^\/(en|pt|es)/, `/${lng}`)
    router.push(newPath)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">
            {languages.find((lang) => lang.code === i18n.language)?.name || "English"}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
            {i18n.language === lang.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

