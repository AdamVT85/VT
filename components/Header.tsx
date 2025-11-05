'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Villas', href: '/villas' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-terracotta text-white py-2">
        <div className="container-custom flex justify-end items-center gap-6 text-sm">
          <a href="tel:+441954261431" className="flex items-center gap-2 hover:text-stone transition-colors">
            <Phone size={16} />
            <span>01954 261 431</span>
          </a>
          <a href="mailto:holidays@vintagetravel.co.uk" className="flex items-center gap-2 hover:text-stone transition-colors">
            <Mail size={16} />
            <span>holidays@vintagetravel.co.uk</span>
          </a>
        </div>
      </div>
      
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-serif text-terracotta font-medium tracking-wide">
              VINTAGE TRAVEL
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-terracotta transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-terracotta transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
