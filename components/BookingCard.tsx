'use client'

import { useState } from 'react'
import { Calendar, Phone, Mail } from 'lucide-react'

interface BookingCardProps {
  villa: {
    name: string
    price: number
    currency: string
    minimumStay: number
  }
}

export default function BookingCard({ villa }: BookingCardProps) {
  const [dates, setDates] = useState({
    checkIn: '',
    checkOut: '',
  })

  const [guests, setGuests] = useState(2)

  const calculateNights = () => {
    if (!dates.checkIn || !dates.checkOut) return 0
    const start = new Date(dates.checkIn)
    const end = new Date(dates.checkOut)
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    return nights > 0 ? nights : 0
  }

  const nights = calculateNights()
  const weeks = Math.ceil(nights / 7)
  const totalPrice = villa.price * weeks

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-terracotta">£{villa.price}</span>
          <span className="text-gray-600">per week</span>
        </div>
        <p className="text-sm text-gray-600">Minimum stay: {villa.minimumStay} nights</p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Check-in
          </label>
          <input
            type="date"
            value={dates.checkIn}
            onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Check-out
          </label>
          <input
            type="date"
            value={dates.checkOut}
            onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="input-field"
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      {nights > 0 && (
        <div className="bg-stone p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">£{villa.price} x {weeks} week{weeks !== 1 ? 's' : ''}</span>
            <span className="font-semibold">£{totalPrice}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-300">
            <span className="font-bold">Total</span>
            <span className="font-bold text-terracotta">£{totalPrice}</span>
          </div>
        </div>
      )}

      <button className="w-full btn-primary mb-4">
        Book Now
      </button>

      <div className="space-y-3 pt-4 border-t border-gray-200">
        <a href="tel:+441954261431" className="flex items-center gap-3 text-gray-700 hover:text-terracotta transition-colors">
          <Phone size={20} />
          <div>
            <p className="text-xs text-gray-600">Call us</p>
            <p className="font-medium">01954 261 431</p>
          </div>
        </a>
        <a href="mailto:holidays@vintagetravel.co.uk" className="flex items-center gap-3 text-gray-700 hover:text-terracotta transition-colors">
          <Mail size={20} />
          <div>
            <p className="text-xs text-gray-600">Email us</p>
            <p className="font-medium">holidays@vintagetravel.co.uk</p>
          </div>
        </a>
      </div>
    </div>
  )
}
