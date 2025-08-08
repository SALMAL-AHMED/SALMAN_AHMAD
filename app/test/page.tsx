import { WebsiteTest } from "@/components/website-test"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Functionality Test</h1>
          <p className="text-lg text-gray-600">Comprehensive testing of all website features</p>
        </div>
        <WebsiteTest />
      </div>
    </div>
  )
}
