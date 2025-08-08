import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Headphones, Map, Globe, Navigation, Settings } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Management & Operations",
      icon: Settings,
      skills: [
        "Project Management & Operations Oversight",
        "Branch Operations Management",
        "Team Leadership & Coordination",
      ],
    },
    {
      title: "Customer Service",
      icon: Headphones,
      skills: [
        "Customer Service & Complaint Resolution",
        "Counter Handling & Front Desk Management",
        "Client Communication & Relationship Management",
      ],
    },
    {
      title: "Travel & Tourism Expertise",
      icon: Map,
      skills: [
        "Haramain Navigation & Location Expertise",
        "Hotel & Service Mapping in Makkah and Madinah",
        "International Travel Coordination",
      ],
    },
    {
      title: "International Relations",
      icon: Globe,
      skills: [
        "Coordination with KSA Teams (Makkah & Madinah)",
        "Trade Partner Engagement",
        "International Networking",
      ],
    },
    {
      title: "Problem Solving",
      icon: Navigation,
      skills: [
        "On-Ground Problem Solving & Client Support",
        "Complaint Handling in Holy Cities",
        "Proactive Issue Prevention",
      ],
    },
    {
      title: "Client Relations",
      icon: Users,
      skills: ["Multi-cultural Client Management", "Phone & Video Consultation", "Religious Tourism Guidance"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Skills & Expertise</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set developed through years of experience in Umrah travel management and project
            coordination
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-amber-700" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
