import Image from 'next/image'
import Link from 'next/link'
import { Bed, Users } from 'lucide-react'

interface VillaCardProps {
  villa: {
    id: string
    name: string
    location: string
    price: number
    currency: string
    bedrooms: number
    sleeps: number
    image: string
  }
}

export default function VillaCard({ villa }: VillaCardProps) {
  return (
    <Link href={`/villas/${villa.id}`} className="card group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={villa.image}
          alt={villa.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-terracotta transition-colors">
          {villa.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{villa.location}</p>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Bed size={16} />
              {villa.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Users size={16} />
              {villa.sleeps}
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold text-terracotta">£{villa.price}</span>
          <span className="text-gray-600 text-sm">per week</span>
        </div>
      </div>
    </Link>
  )
}
