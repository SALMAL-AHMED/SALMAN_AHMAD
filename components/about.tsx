import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, GraduationCap, Languages, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Personal Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">
                    <strong>Date of Birth:</strong> November 9, 1995
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">
                    <strong>Location:</strong> Gulshan Usman, Rahim Yar Khan
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">
                    <strong>Qualification:</strong> Diploma of Associate Engineering
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">
                    <strong>Languages:</strong> English, Urdu, Punjabi, Seraiki
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Certifications & Training</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Communication Skills",
                  "Front Desk Management",
                  "Business Management",
                  "Business Analytics",
                  "Business Advisor",
                  "Content Finance",
                ].map((cert, index) => (
                  <Card key={index} className="border-amber-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-amber-700" />
                        <span className="text-gray-700 font-medium">{cert}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
