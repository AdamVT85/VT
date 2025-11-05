import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-palm text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-serif mb-4 font-medium">VINTAGE TRAVEL</h3>
            <p className="mb-4 text-sm">
              Handpicked villas with private pools across the Mediterranean. 
              The art of the Mediterranean since 1990.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-clay transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-clay transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-clay transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/villas" className="hover:text-clay transition-colors">Browse Villas</Link></li>
              <li><Link href="/destinations" className="hover:text-clay transition-colors">Destinations</Link></li>
              <li><Link href="/about" className="hover:text-clay transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-clay transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/destinations/spain" className="hover:text-clay transition-colors">Spain</Link></li>
              <li><Link href="/destinations/france" className="hover:text-clay transition-colors">France</Link></li>
              <li><Link href="/destinations/italy" className="hover:text-clay transition-colors">Italy</Link></li>
              <li><Link href="/destinations/greece" className="hover:text-clay transition-colors">Greece</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Barton Road, Comberton<br />Cambridge CB23 7BA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+441954261431" className="hover:text-clay transition-colors">01954 261 431</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:holidays@vintagetravel.co.uk" className="hover:text-clay transition-colors">holidays@vintagetravel.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-palm-light mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Vintage Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
