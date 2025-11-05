import VillaCard from './VillaCard'
import { Villa } from '@/types'

export default function SimilarVillas({ currentVillaId, location }: any) {
  // Mock data - in production, this would fetch from Salesforce
  const mockVillas: Villa[] = [
    {
      id: '10',
      name: 'Coastal Dream Villa',
      description: 'Beautiful coastal property with infinity pool',
      location: { city: location || 'Santorini', country: 'Greece' },
      pricing: { nightlyRate: 750, currency: 'USD' },
      capacity: { guests: 6, bedrooms: 3, beds: 3, bathrooms: 2 },
      images: [{ url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800', isPrimary: true }],
      amenities: [],
      availability: true,
      rating: 4.7,
      reviewCount: 89
    },
    {
      id: '11',
      name: 'Luxury Hillside Estate',
      description: 'Spectacular views and modern amenities',
      location: { city: location || 'Santorini', country: 'Greece' },
      pricing: { nightlyRate: 920, currency: 'USD' },
      capacity: { guests: 8, bedrooms: 4, beds: 4, bathrooms: 3 },
      images: [{ url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800', isPrimary: true }],
      amenities: [],
      availability: true,
      rating: 4.8,
      reviewCount: 134
    },
    {
      id: '12',
      name: 'Seaside Retreat Villa',
      description: 'Private beach access and stunning sunsets',
      location: { city: location || 'Santorini', country: 'Greece' },
      pricing: { nightlyRate: 680, currency: 'USD' },
      capacity: { guests: 6, bedrooms: 3, beds: 3, bathrooms: 2 },
      images: [{ url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', isPrimary: true }],
      amenities: [],
      availability: true,
      rating: 4.9,
      reviewCount: 176
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8">Similar Villas Nearby</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockVillas.filter(v => v.id !== currentVillaId).map(villa => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </div>
    </section>
  )
}
