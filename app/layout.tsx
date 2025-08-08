import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Salman Chaudhry - Umrah Travel Expert & Branch Manager",
  description: "Professional portfolio of Salman Chaudhry, experienced Umrah travel expert and branch manager with 5+ years of experience managing 2000+ clients across Pakistan, UAE, UK, and USA.",
  keywords: "Umrah travel, travel expert, branch manager, Pakistan, Saudi Arabia, Makkah, Madinah, religious tourism",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
