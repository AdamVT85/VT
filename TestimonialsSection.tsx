import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    text: 'We had the most wonderful week at Villa Solana. The property was exactly as described, beautifully maintained, and the local rep was incredibly helpful. We will definitely be booking again!',
    villa: 'Villa Solana, Mallorca'
  },
  {
    id: 2,
    name: 'Michael Davies',
    location: 'Manchester, UK',
    rating: 5,
    text: 'Vintage Villa Rentals made our family holiday absolutely perfect. The booking process was straightforward, and the villa exceeded our expectations. The location was peaceful yet close to local amenities.',
    villa: 'Casa Rustica, Tuscany'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    location: 'Edinburgh, UK',
    rating: 5,
    text: 'This was our third time booking with Vintage Villa Rentals and they never disappoint. The attention to detail, quality of properties, and excellent customer service keeps us coming back year after year.',
    villa: 'Villa Azure, Santorini'
  },
]

export default function TestimonialsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
          <div className="border-t pt-4">
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
            <p className="text-sm text-primary-600 mt-1">{testimonial.villa}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
