"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SocialMediaSection() {
  const { t } = useTranslation()

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      username: "@webintelligence",
      url: "https://linkedin.com/",
      color: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20",
      borderColor: "border-[#0077B5]/20",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      username: "@webintelligence",
      url: "https://twitter.com/",
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20",
      borderColor: "border-[#1DA1F2]/20",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      username: "@webintelligence",
      url: "https://instagram.com/",
      color: "bg-[#E1306C]/10 text-[#E1306C] hover:bg-[#E1306C]/20",
      borderColor: "border-[#E1306C]/20",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      username: "@webintelligence",
      url: "https://facebook.com/",
      color: "bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20",
      borderColor: "border-[#1877F2]/20",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      username: "@webintelligence",
      url: "https://youtube.com/",
      color: "bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000]/20",
      borderColor: "border-[#FF0000]/20",
    },
  ]

  const recentPosts = [
    {
      platform: "LinkedIn",
      image: "/placeholder.svg?height=120&width=200&text=Post+1",
      title: "The Future of Web Development: Trends to Watch in 2025",
      date: "2 days ago",
      icon: <Linkedin className="h-4 w-4 text-[#0077B5]" />,
    },
    {
      platform: "Twitter",
      image: "/placeholder.svg?height=120&width=200&text=Post+2",
      title: "How AI is Transforming Software Development Practices",
      date: "5 days ago",
      icon: <Twitter className="h-4 w-4 text-[#1DA1F2]" />,
    },
    {
      platform: "Instagram",
      image: "/placeholder.svg?height=120&width=200&text=Post+3",
      title: "Behind the Scenes: Our Team Building a Fintech Solution",
      date: "1 week ago",
      icon: <Instagram className="h-4 w-4 text-[#E1306C]" />,
    },
  ]

  return (
    <section id="social-media" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
            {t("socialMedia.badge")}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("socialMedia.title")}</h2>
          <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed">{t("socialMedia.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {socialPlatforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-xl border ${platform.borderColor} ${platform.color} transition-colors`}
            >
              <div className="mb-4">{platform.icon}</div>
              <h3 className="font-bold mb-1">{platform.name}</h3>
              <p className="text-sm mb-4">{platform.username}</p>
              <span className="text-xs font-medium">{t("actions.viewProfile")} →</span>
            </Link>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8 text-center">{t("socialMedia.latestPosts")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-40 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-white rounded-full p-1.5">{post.icon}</div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 line-clamp-2">{post.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <Link href="#" className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center">
                    {t("socialMedia.readMore")}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="rounded-full group">
            {t("actions.viewAllPosts")}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

