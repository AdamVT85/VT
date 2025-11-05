import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity'

async function getDestinations() {
  try {
    const destinations = await client.fetch(`*[_type == "destination" && featured == true] | order(name asc){
      _id,
      name,
      slug,
      description,
      villaCount,
      "imageUrl": image.asset->url
    }`)
    return destinations
  } catch (error) {
    console.error('Error fetching destinations:', error)
    return []
  }
}

export default async function DestinationsGrid() {
  const destinations = await getDestinations()

  // Fallback mock data if Sanity has no data
  const mockDestinations = [
    {
      _id: '1',
      name: 'Spain',
      slug: { current: 'spain' },
      villaCount: 145,
      imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=600&fit=crop'
    },
    {
      _id: '2',
      name: 'France',
      slug: { current: 'france' },
      villaCount: 98,
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop'
    },
    {
      _id: '3',
      name: 'Italy',
      slug: { current: 'italy' },
      villaCount: 112,
      imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop'
    },
  ]

  const displayDestinations = destinations.length > 0 ? destinations : mockDestinations

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayDestinations.map((destination: any) => (
        <Link
          key={destination._id}
          href={`/destinations/${destination.slug?.current || destination.slug}`}
          className="group relative h-80 rounded-lg overflow-hidden"
        >
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-3xl font-serif text-white mb-2 font-light">
              {destination.name}
            </h3>
            <p className="text-white/90">
              {destination.villaCount} Villas Available
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
