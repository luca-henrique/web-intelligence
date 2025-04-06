"use client"

import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Smartphone, Cloud, Wrench, CheckCircle2 } from "lucide-react"

export function TechnologiesSection() {
  const { t } = useTranslation()

  const techCategories = [
    {
      id: "frontend",
      icon: <Code className="h-5 w-5" />,
      title: t("technologies.categories.frontend"),
      technologies: [
        { name: "React", expertise: "expert" },
        { name: "Next.js", expertise: "expert" },
        { name: "TypeScript", expertise: "expert" },
        { name: "Vue.js", expertise: "advanced" },
        { name: "Angular", expertise: "advanced" },
        { name: "TailwindCSS", expertise: "expert" },
        { name: "SASS/SCSS", expertise: "expert" },
        { name: "Redux", expertise: "advanced" },
        { name: "GraphQL (Client)", expertise: "advanced" },
        { name: "Webpack", expertise: "advanced" },
        { name: "Vite", expertise: "advanced" },
        { name: "Jest", expertise: "advanced" },
        { name: "Testing Library", expertise: "advanced" },
      ],
    },
    {
      id: "backend",
      icon: <Server className="h-5 w-5" />,
      title: t("technologies.categories.backend"),
      technologies: [
        { name: "Node.js", expertise: "expert" },
        { name: "Express.js", expertise: "expert" },
        { name: "NestJS", expertise: "advanced" },
        { name: "Python", expertise: "advanced" },
        { name: "Django", expertise: "advanced" },
        { name: "FastAPI", expertise: "advanced" },
        { name: "Java", expertise: "advanced" },
        { name: "Spring Boot", expertise: "advanced" },
        { name: "GraphQL (Server)", expertise: "advanced" },
        { name: "REST API Design", expertise: "expert" },
        { name: "Microservices", expertise: "advanced" },
        { name: "WebSockets", expertise: "advanced" },
      ],
    },
    {
      id: "mobile",
      icon: <Smartphone className="h-5 w-5" />,
      title: t("technologies.categories.mobile"),
      technologies: [
        { name: "React Native", expertise: "expert" },
        { name: "Flutter", expertise: "advanced" },
        { name: "Swift", expertise: "advanced" },
        { name: "Kotlin", expertise: "advanced" },
        { name: "Expo", expertise: "advanced" },
        { name: "Mobile UI/UX", expertise: "expert" },
        { name: "App Performance", expertise: "advanced" },
        { name: "Push Notifications", expertise: "advanced" },
        { name: "Offline Storage", expertise: "advanced" },
        { name: "App Store Optimization", expertise: "advanced" },
      ],
    },
    {
      id: "database",
      icon: <Database className="h-5 w-5" />,
      title: t("technologies.categories.database"),
      technologies: [
        { name: "PostgreSQL", expertise: "expert" },
        { name: "MongoDB", expertise: "expert" },
        { name: "MySQL", expertise: "advanced" },
        { name: "Redis", expertise: "advanced" },
        { name: "Elasticsearch", expertise: "advanced" },
        { name: "Firebase", expertise: "advanced" },
        { name: "Supabase", expertise: "advanced" },
        { name: "DynamoDB", expertise: "advanced" },
        { name: "ORM (Prisma, Sequelize)", expertise: "expert" },
        { name: "Database Design", expertise: "expert" },
        { name: "Data Modeling", expertise: "advanced" },
      ],
    },
    {
      id: "devops",
      icon: <Cloud className="h-5 w-5" />,
      title: t("technologies.categories.devops"),
      technologies: [
        { name: "Docker", expertise: "expert" },
        { name: "Kubernetes", expertise: "advanced" },
        { name: "AWS", expertise: "advanced" },
        { name: "Google Cloud", expertise: "advanced" },
        { name: "Azure", expertise: "advanced" },
        { name: "Vercel", expertise: "expert" },
        { name: "Netlify", expertise: "expert" },
        { name: "CI/CD", expertise: "advanced" },
        { name: "GitHub Actions", expertise: "expert" },
        { name: "Terraform", expertise: "advanced" },
        { name: "Monitoring & Logging", expertise: "advanced" },
      ],
    },
    {
      id: "tools",
      icon: <Wrench className="h-5 w-5" />,
      title: t("technologies.categories.tools"),
      technologies: [
        { name: "Git", expertise: "expert" },
        { name: "GitHub/GitLab", expertise: "expert" },
        { name: "Jira", expertise: "expert" },
        { name: "Figma", expertise: "advanced" },
        { name: "Postman", expertise: "expert" },
        { name: "VS Code", expertise: "expert" },
        { name: "Storybook", expertise: "advanced" },
        { name: "Agile/Scrum", expertise: "expert" },
        { name: "TDD", expertise: "advanced" },
        { name: "Clean Code", expertise: "expert" },
        { name: "Code Review", expertise: "expert" },
      ],
    },
  ]

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "expert":
        return "bg-green-100 text-green-800 border-green-200"
      case "advanced":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="technologies" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
            {t("technologies.badge")}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("technologies.title")}</h2>
          <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed">{t("technologies.description")}</p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto p-1 bg-muted/20">
            {techCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 py-2 px-4 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {techCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-700">{t("technologies.expertise.expert")}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {category.technologies
                    .filter((tech) => tech.expertise === "expert")
                    .map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-green-200 bg-green-50 hover:shadow-md transition-all hover:bg-green-100 group"
                      >
                        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm group-hover:shadow">
                          <Code className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="font-medium text-center">{tech.name}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-600">{t("technologies.expertise.advanced")}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {category.technologies
                    .filter((tech) => tech.expertise === "advanced")
                    .map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-blue-200 bg-blue-50 hover:shadow-md transition-all hover:bg-blue-100 group"
                      >
                        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm group-hover:shadow">
                          <Code className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="font-medium text-center">{tech.name}</span>
                      </div>
                    ))}
                </div>
              </div>

              {category.technologies.some((tech) => tech.expertise === "intermediate") && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-600">{t("technologies.expertise.intermediate")}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {category.technologies
                      .filter((tech) => tech.expertise === "intermediate")
                      .map((tech, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-yellow-200 bg-yellow-50 hover:shadow-md transition-all hover:bg-yellow-100 group"
                        >
                          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm group-hover:shadow">
                            <Code className="h-6 w-6 text-yellow-600 group-hover:scale-110 transition-transform" />
                          </div>
                          <span className="font-medium text-center">{tech.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code className="h-8 w-8 text-blue-600" />}
            title={t("technologies.modernFrontend")}
            items={["React.js", "Next.js", "Vue.js", "TailwindCSS", "TypeScript"]}
          />
          <FeatureCard
            icon={<Server className="h-8 w-8 text-blue-600" />}
            title={t("technologies.robustBackend")}
            items={["Node.js", "Python", "Java", "Go", "GraphQL"]}
          />
          <FeatureCard
            icon={<Database className="h-8 w-8 text-blue-600" />}
            title={t("technologies.dataStorage")}
            items={["PostgreSQL", "MongoDB", "Redis", "Firebase", "Elasticsearch"]}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, items }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-blue-200">
      <CardContent className="p-6 space-y-4">
        <div className="p-3 rounded-full bg-blue-50 w-fit">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

