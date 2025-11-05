import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Absolutely stunning villa! The views were breathtaking and the service was impeccable. Our family had the time of our lives.',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=f0831f&color=fff'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      rating: 5,
      text: 'Best vacation rental experience we have ever had. The attention to detail was exceptional. Will definitely book again!',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=0ba5e9&color=fff'
    },
    {
      name: 'Emma Williams',
      location: 'London, UK',
      rating: 5,
      text: 'The perfect getaway for our anniversary. Everything was exactly as described and even better in person. Highly recommend!',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Williams&background=f0831f&color=fff'
    }
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-gray-600 text-lg">Real experiences from travelers around the world</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
