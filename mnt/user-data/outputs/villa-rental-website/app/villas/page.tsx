import VillaCard from '@/components/VillaCard'
import SearchBar from '@/components/SearchBar'
import SearchFilters from '@/components/SearchFilters'

// This would fetch from Salesforce in production
const mockVillas = [
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
  {
    id: '5',
    name: 'Villa Serena',
    location: 'Algarve, Portugal',
    price: 1450,
    currency: 'GBP',
    bedrooms: 3,
    sleeps: 6,
    image: 'https://via.placeholder.com/800x600/c07d47/ffffff?text=Villa+Serena'
  },
  {
    id: '6',
    name: 'Casa del Mare',
    location: 'Istria, Croatia',
    price: 1350,
    currency: 'GBP',
    bedrooms: 4,
    sleeps: 8,
    image: 'https://via.placeholder.com/800x600/c07d47/ffffff?text=Casa+del+Mare'
  },
]

export default async function VillasPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // In production, this would call salesforceClient.searchVillas() with searchParams
  const villas = mockVillas

  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="bg-primary-600 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Browse Our Villas</h1>
          <p className="text-xl text-sand-100">
            Discover handpicked villas with private pools across Europe
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
                  Showing <span className="font-semibold">{villas.length}</span> villas
                </p>
                <select className="input-field w-auto">
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="bedrooms">Bedrooms</option>
                  <option value="name">Name</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {villas.map((villa) => (
                  <VillaCard key={villa.id} villa={villa} />
                ))}
              </div>

              {villas.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">
                    No villas found matching your criteria. Please adjust your search filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
