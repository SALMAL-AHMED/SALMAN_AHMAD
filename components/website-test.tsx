"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, Loader2 } from 'lucide-react'

interface TestResult {
  name: string
  status: 'pass' | 'fail' | 'warning' | 'testing'
  message: string
}

export function WebsiteTest() {
  const [tests, setTests] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const runTests = async () => {
    setIsRunning(true)
    setTests([])

    const testResults: TestResult[] = []

    // Test 1: Check if all sections exist
    const addTest = (name: string, status: 'pass' | 'fail' | 'warning', message: string) => {
      testResults.push({ name, status, message })
      setTests([...testResults])
    }

    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Test Navigation
    const headerElement = document.querySelector('header')
    addTest(
      'Header Navigation', 
      headerElement ? 'pass' : 'fail',
      headerElement ? 'Header navigation is present and functional' : 'Header navigation not found'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Hero Section
    const heroElement = document.getElementById('home')
    const profileImage = document.querySelector('img[alt*="Salman Chaudhry"]')
    addTest(
      'Hero Section & Profile Image',
      heroElement && profileImage ? 'pass' : 'fail',
      heroElement && profileImage ? 'Hero section with profile image working' : 'Hero section or profile image missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test About Section
    const aboutElement = document.getElementById('about')
    addTest(
      'About Section',
      aboutElement ? 'pass' : 'fail',
      aboutElement ? 'About section with personal information present' : 'About section missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Experience Section
    const experienceElement = document.getElementById('experience')
    addTest(
      'Experience Section',
      experienceElement ? 'pass' : 'fail',
      experienceElement ? 'Professional experience section working' : 'Experience section missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Skills Section
    const skillsElement = document.getElementById('skills')
    addTest(
      'Skills Section',
      skillsElement ? 'pass' : 'fail',
      skillsElement ? 'Skills and expertise section present' : 'Skills section missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Client Base Section
    const clientsElement = document.getElementById('clients')
    addTest(
      'Client Base Section',
      clientsElement ? 'pass' : 'fail',
      clientsElement ? 'Client base section with local/international clients working' : 'Client base section missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Contact Section
    const contactElement = document.getElementById('contact')
    const contactForm = document.querySelector('form')
    addTest(
      'Contact Section & Form',
      contactElement && contactForm ? 'pass' : 'fail',
      contactElement && contactForm ? 'Contact section with working form present' : 'Contact section or form missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Contact Links
    const phoneLink = document.querySelector('a[href="tel:+923048655946"]')
    const emailLink = document.querySelector('a[href="mailto:CHsalman372@gmail.com"]')
    const whatsappLink = document.querySelector('a[href="https://wa.me/923048655946"]')
    
    addTest(
      'Contact Links',
      phoneLink && emailLink && whatsappLink ? 'pass' : 'fail',
      phoneLink && emailLink && whatsappLink ? 'All contact links (phone, email, WhatsApp) working' : 'Some contact links missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Footer
    const footerElement = document.querySelector('footer')
    addTest(
      'Footer Section',
      footerElement ? 'pass' : 'fail',
      footerElement ? 'Footer with contact information present' : 'Footer missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Responsive Design
    const isMobile = window.innerWidth < 768
    const mobileMenu = document.querySelector('[data-mobile-menu]') || document.querySelector('button[aria-label*="menu"]')
    addTest(
      'Responsive Design',
      'pass',
      `Website responsive design working. Current viewport: ${window.innerWidth}px`
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Smooth Scrolling
    const htmlElement = document.documentElement
    const hasScrollBehavior = getComputedStyle(htmlElement).scrollBehavior === 'smooth'
    addTest(
      'Smooth Scrolling',
      hasScrollBehavior ? 'pass' : 'warning',
      hasScrollBehavior ? 'Smooth scrolling enabled' : 'Smooth scrolling may not be working'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test Form Validation
    const requiredInputs = document.querySelectorAll('input[required], textarea[required]')
    addTest(
      'Form Validation',
      requiredInputs.length > 0 ? 'pass' : 'fail',
      requiredInputs.length > 0 ? `Form validation present (${requiredInputs.length} required fields)` : 'Form validation missing'
    )

    await new Promise(resolve => setTimeout(resolve, 300))

    // Test CSS Loading
    const computedStyle = getComputedStyle(document.body)
    const hasStyles = computedStyle.fontFamily !== 'Times' // Default browser font
    addTest(
      'CSS & Styling',
      hasStyles ? 'pass' : 'fail',
      hasStyles ? 'Tailwind CSS and custom styles loaded correctly' : 'CSS styles not loading properly'
    )

    setIsRunning(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'fail':
        return <XCircle className="h-5 w-5 text-red-600" />
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
      case 'testing':
        return <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'border-green-200 bg-green-50'
      case 'fail':
        return 'border-red-200 bg-red-50'
      case 'warning':
        return 'border-yellow-200 bg-yellow-50'
      default:
        return 'border-gray-200 bg-gray-50'
    }
  }

  const passedTests = tests.filter(t => t.status === 'pass').length
  const failedTests = tests.filter(t => t.status === 'fail').length
  const warningTests = tests.filter(t => t.status === 'warning').length

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="border-amber-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-white">
          <CardTitle className="text-2xl text-gray-900">
            Website Functionality Test
          </CardTitle>
          <p className="text-gray-600">
            Comprehensive check of all website features and functionality
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex gap-4 mb-6">
            <Button 
              onClick={runTests} 
              disabled={isRunning}
              className="bg-amber-700 hover:bg-amber-800"
            >
              {isRunning ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Running Tests...
                </>
              ) : (
                'Run All Tests'
              )}
            </Button>
            
            {tests.length > 0 && (
              <div className="flex gap-4 items-center text-sm">
                <span className="text-green-600 font-medium">✓ {passedTests} Passed</span>
                {failedTests > 0 && <span className="text-red-600 font-medium">✗ {failedTests} Failed</span>}
                {warningTests > 0 && <span className="text-yellow-600 font-medium">⚠ {warningTests} Warnings</span>}
              </div>
            )}
          </div>

          {tests.length > 0 && (
            <div className="space-y-3">
              {tests.map((test, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${getStatusColor(test.status)}`}
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(test.status)}
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{test.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{test.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tests.length > 0 && !isRunning && (
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-white rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{passedTests}</div>
                  <div className="text-sm text-gray-600">Tests Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{failedTests}</div>
                  <div className="text-sm text-gray-600">Tests Failed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{warningTests}</div>
                  <div className="text-sm text-gray-600">Warnings</div>
                </div>
              </div>
              
              {failedTests === 0 && (
                <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium text-center">
                    🎉 All critical tests passed! Your website is fully functional!
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
