import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Branch Manager",
      company: "Waqar-e-Madina Group",
      location: "Rahim Yar Khan Branch",
      duration: "2021 – 2025",
      type: "Umrah Travel Operations",
      highlights: [
        "Specialized in Umrah travel arrangements and religious tourism",
        "Arranged Umrah trips for 2000+ clients, both domestic and international",
        "Collaborated with Waqar-e-Madina as a branch partner",
        "Managed clients from UAE, UK, USA, and various cities across Pakistan",
        "Built long-term relationships with hotel owners and travel service providers in Saudi Arabia",
        "Expertly handled complaints in Makkah and Madinah, including hotel check-in issues, shuttle services, and guest concerns",
        "Coordinated seamlessly with KSA teams, including staff in both Makkah and Madinah",
        "Personally visited and explored Makkah and Madinah for 2-3 months to experience and identify client pain points",
        "Developed deep knowledge of Haramain navigation, hotel categories, distances, street names, food service locations",
        "Able to guide clients accurately over phone or video call, ensuring smooth experiences during Umrah",
      ],
    },
    {
      title: "Project Manager",
      company: "Wilayat Technical Institute",
      location: "Rawalpindi",
      duration: "2014 – 2019",
      type: "Technical Education",
      highlights: [
        "Managed and led technical and vocational training projects",
        "Oversaw project planning, execution, and team coordination",
        "Successfully delivered impactful training programs with measurable results",
        "Planned and executed team operations",
        "Delivered successful training outcomes",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-amber-700 font-semibold mb-2">
                      <Building className="h-5 w-5" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800 self-start">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
