import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, MapPin, Users, Flag } from "lucide-react"

export function ClientBase() {
  const localClients = [
    "Karachi",
    "Rahim Yar Khan",
    "Lahore",
    "Islamabad",
    "Faisalabad",
    "Other major cities across Pakistan",
  ]

  const internationalClients = [
    { country: "United Arab Emirates", flag: "🇦🇪", cities: ["Dubai", "Abu Dhabi", "Sharjah"] },
    { country: "United Kingdom", flag: "🇬🇧", cities: ["London", "Birmingham", "Manchester"] },
    { country: "United States", flag: "🇺🇸", cities: ["New York", "Chicago", "Los Angeles"] },
  ]

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Base</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving diverse communities across Pakistan and internationally, with expertise in managing clients from
            multiple countries and cultures
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Local Clients */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Local Clients</CardTitle>
                    <p className="text-gray-600">Across Pakistan</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {localClients.map((city, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                      <Flag className="h-4 w-4 text-amber-700" />
                      <span className="text-gray-700 font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* International Clients */}
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900">International Clients</CardTitle>
                    <p className="text-gray-600">Global Reach</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {internationalClients.map((client, index) => (
                    <div key={index} className="p-4 bg-amber-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{client.flag}</span>
                        <span className="font-semibold text-gray-900">{client.country}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {client.cities.map((city, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-amber-200"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <Users className="h-8 w-8 text-amber-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-amber-700 mb-2">2000+</div>
              <div className="text-gray-600">Total Clients Served</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <Flag className="h-8 w-8 text-amber-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-amber-700 mb-2">4</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <MapPin className="h-8 w-8 text-amber-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-amber-700 mb-2">10+</div>
              <div className="text-gray-600">Major Cities</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-amber-200">
              <Globe className="h-8 w-8 text-amber-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
