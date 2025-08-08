"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d97706' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30zM0 30c0 16.569 13.431 30 30 30V0C13.431 0 0 13.431 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-lg border-4 border-amber-200">
            <img
              src="/images/salman-profile.png"
              alt="Salman Chaudhry - Professional Photo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-amber-700">Salman Chaudhry</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">Umrah Travel Expert & Branch Manager</h2>

          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Seeking a challenging and rewarding position in travel & tourism, project management, or client services
            where I can leverage my extensive experience, leadership abilities, and strong industry network to
            contribute to organizational success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={scrollToContact} className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg">
              Get In Touch
            </Button>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-700" />
                <span>Rahim Yar Khan</span>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">2000+</div>
              <div className="text-gray-600">Umrah Travelers Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">4</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
