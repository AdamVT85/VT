import VillaCard from '@/components/VillaCard'
import SearchBar from '@/components/SearchBar'
import SearchFilters from '@/components/SearchFilters'

const mockVillas = [
  {
    id: '1',
    name: 'Villa Solana',
    location: 'Mallorca, Spain',
    price: 1250,
    currency: 'GBP',
    bedrooms: 4,
    sleeps: 8,
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop'
  },
  {
    id: '2',
    name: 'Casa Rustica',
    location: 'Tuscany, Italy',
    price: 1850,
    currency: 'GBP',
    bedrooms: 5,
    sleeps: 10,
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&h=600&fit=crop'
  },
  {
    id: '3',
    name: 'Villa Azure',
    location: 'Santorini, Greece',
    price: 2100,
    currency: 'GBP',
    bedrooms: 3,
    sleeps: 6,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop'
  },
  {
    id: '4',
    name: 'Maison Lavande',
    location: 'Provence, France',
    price: 1650,
    currency: 'GBP',
    bedrooms: 4,
    sleeps: 8,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
  },
]

export default function VillasPage() {
  return (
    <div className="bg-stone min-h-screen">
      <div className="bg-terracotta text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 font-light">Browse Our Villas</h1>
          <p className="text-xl text-stone-light">
            Discover handpicked villas with private pools across the Mediterranean
          </p>
        </div>
      </div>

      <section className="relative -mt-8 z-10">
        <div className="container-custom">
          <SearchBar />
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/4">
              <SearchFilters />
            </aside>

            <div className="lg:w-3/4">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{mockVillas.length}</span> villas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockVillas.map((villa) => (
                  <VillaCard key={villa.id} villa={villa} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
