import Link from 'next/link'
import Image from 'next/image'

const destinations = [
  { name: 'Santorini', country: 'Greece', properties: 45, image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600' },
  { name: 'Bali', country: 'Indonesia', properties: 78, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600' },
  { name: 'Tuscany', country: 'Italy', properties: 52, image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600' },
  { name: 'Maldives', country: 'Maldives', properties: 34, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600' },
]

export default function Destinations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 text-lg">Explore villas in the world's most sought-after locations</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map(dest => (
            <Link
              key={dest.name}
              href={`/search?location=${dest.name}`}
              className="group relative h-64 rounded-xl overflow-hidden"
            >
              <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                <p className="text-sm opacity-90">{dest.properties} properties</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
