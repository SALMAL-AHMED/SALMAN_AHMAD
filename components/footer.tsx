import { Heart, MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Salman Chaudhry</h3>
            <p className="text-gray-300 mb-4">
              Experienced Umrah travel expert and branch manager dedicated to providing exceptional service and guidance
              for your spiritual journey.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Rahim Yar Khan, Pakistan</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Umrah Travel Management</li>
              <li>International Client Coordination</li>
              <li>Hotel & Accommodation Services</li>
              <li>Religious Tourism Guidance</li>
              <li>Project Management Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+923048655946" className="text-gray-300 hover:text-amber-400 transition-colors">
                  +92 (304) 865 5946
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:CHsalman372@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                  CHsalman372@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://wa.me/923048655946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  WhatsApp: +92 (304) 865 5946
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> for the Muslim community
          </p>
          <p className="text-gray-500 mt-2">© 2025 Salman Chaudhry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
