import VillaCard from './VillaCard'

// Mock data - in production, this would come from Salesforce
const featuredVillas = [
  {
    id: '1',
    name: 'Villa Solana',
    location: 'Mallorca, Spain',
    price: 1250,
    currency: 'GBP',
    bedrooms: 4,
    sleeps: 8,
    image: 'https://via.placeholder.com/800x600/c07d47/ffffff?text=Villa+Solana'
  },
  {
    id: '2',
    name: 'Casa Rustica',
    location: 'Tuscany, Italy',
    price: 1850,
    currency: 'GBP',
    bedrooms: 5,
    sleeps: 10,
    image: 'https://via.placeholder.com/800x600/c07d47/ffffff?text=Casa+Rustica'
  },
  {
    id: '3',
    name: 'Villa Azure',
    location: 'Santorini, Greece',
    price: 2100,
    currency: 'GBP',
    bedrooms: 3,
    sleeps: 6,
    image: 'https://via.placeholder.com/800x600/c07d47/ffffff?text=Villa+Azure'
  },
  {
    id: '4',
    name: 'Maison Lavande',
    location: 'Provence, France',
    price: 1650,
    currency: 'GBP',
    bedrooms: 4,
    sleeps: 8,
    image: 'https://via.placeholder.com/800x600/c07d47/ffffff?text=Maison+Lavande'
  },
]

export default function FeaturedVillas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredVillas.map((villa) => (
        <VillaCard key={villa.id} villa={villa} />
      ))}
    </div>
  )
}
