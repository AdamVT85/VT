import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  { name: 'Spain', villaCount: 145, image: 'https://via.placeholder.com/600x400/c07d47/ffffff?text=Spain', slug: 'spain' },
  { name: 'France', villaCount: 98, image: 'https://via.placeholder.com/600x400/c07d47/ffffff?text=France', slug: 'france' },
  { name: 'Italy', villaCount: 112, image: 'https://via.placeholder.com/600x400/c07d47/ffffff?text=Italy', slug: 'italy' },
  { name: 'Greece', villaCount: 87, image: 'https://via.placeholder.com/600x400/c07d47/ffffff?text=Greece', slug: 'greece' },
  { name: 'Portugal', villaCount: 64, image: 'https://via.placeholder.com/600x400/c07d47/ffffff?text=Portugal', slug: 'portugal' },
  { name: 'Croatia', villaCount: 45, image: 'https://via.placeholder.com/600x400/c07d47/ffffff?text=Croatia', slug: 'croatia' },
]

export default function DestinationsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((destination) => (
        <Link
          key={destination.slug}
          href={`/destinations/${destination.slug}`}
          className="relative h-80 rounded-lg overflow-hidden group"
        >
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-3xl font-serif mb-2">{destination.name}</h3>
            <p className="text-sand-100">{destination.villaCount} Villas Available</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
