'use client'

import { useState } from 'react'
import { Search, Calendar, Users } from 'lucide-react'

export default function SearchBar() {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchData.destination) params.append('destination', searchData.destination)
    if (searchData.checkIn) params.append('checkIn', searchData.checkIn)
    if (searchData.checkOut) params.append('checkOut', searchData.checkOut)
    if (searchData.guests) params.append('guests', searchData.guests)
    window.location.href = `/villas?${params.toString()}`
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Search size={16} className="inline mr-2" />
            Destination
          </label>
          <select
            value={searchData.destination}
            onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
            className="input-field"
          >
            <option value="">All Destinations</option>
            <option value="Spain">Spain</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Greece">Greece</option>
            <option value="Portugal">Portugal</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Check In
          </label>
          <input
            type="date"
            value={searchData.checkIn}
            onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar size={16} className="inline mr-2" />
            Check Out
          </label>
          <input
            type="date"
            value={searchData.checkOut}
            onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users size={16} className="inline mr-2" />
            Guests
          </label>
          <select
            value={searchData.guests}
            onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
            className="input-field"
          >
            <option value="">Select guests</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-4">
          <button type="submit" className="w-full btn-primary">
            Search Villas
          </button>
        </div>
      </form>
    </div>
  )
}
