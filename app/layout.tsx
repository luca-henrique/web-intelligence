import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"
import { ReactNode } from "react"
import './globals.css'


export const metadata: Metadata = {
  title: "Web Intelligence - Software Development Company",
  description:
    "We build innovative, scalable, and secure software that drives business growth and enhances user experience.",
}

interface RootLayoutProps {
  children: ReactNode
  params: {
    lang: string
  }
}

export default function RootLayout({ children, params: { lang } }: RootLayoutProps) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
