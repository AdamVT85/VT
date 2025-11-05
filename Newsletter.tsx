'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Thank you for subscribing! Check your email for confirmation.')
    setEmail('')
    setLoading(false)
  }

  return (
    <section className="py-20 bg-primary-600">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to receive exclusive deals, travel inspiration, and the latest luxury villa listings
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 outline-none"
              disabled={loading}
            />
            <button 
              type="submit" 
              disabled={loading}
              className="btn bg-white text-primary-600 hover:bg-gray-100 disabled:opacity-50 whitespace-nowrap px-8"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          <p className="text-sm mt-4 opacity-75">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
