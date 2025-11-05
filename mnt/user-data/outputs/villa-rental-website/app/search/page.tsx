import SearchFilters from '@/components/SearchFilters'
import VillaCard from '@/components/VillaCard'
import Pagination from '@/components/Pagination'
import { searchVillas } from '@/lib/salesforce'
import { SearchParams, Villa } from '@/types'

export const revalidate = 60 // Revalidate every minute

interface SearchPageProps {
  searchParams: {
    location?: string
    checkIn?: string
    checkOut?: string
    guests?: string
    minPrice?: string
    maxPrice?: string
    amenities?: string
    page?: string
  }
}

async function getSearchResults(params: SearchParams) {
  try {
    // const results = await searchVillas(params)
    
    // Mock data for demonstration
    const mockVillas: Villa[] = [
      {
        id: '1',
        name: 'Sunset Paradise Villa',
        description: 'Stunning oceanfront villa with breathtaking sunset views',
        location: { city: params.location || 'Santorini', country: 'Greece' },
        pricing: { nightlyRate: 850, currency: 'USD' },
        capacity: { guests: 8, bedrooms: 4, beds: 4, bathrooms: 3 },
        images: [{ url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', isPrimary: true }],
        amenities: [],
        availability: true,
        rating: 4.9,
        reviewCount: 127
      },
      {
        id: '2',
        name: 'Mountain Retreat Lodge',
        description: 'Luxury mountain escape with panoramic alpine views',
        location: { city: params.location || 'Aspen', country: 'USA' },
        pricing: { nightlyRate: 1200, currency: 'USD' },
        capacity: { guests: 10, bedrooms: 5, beds: 6, bathrooms: 4 },
        images: [{ url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', isPrimary: true }],
        amenities: [],
        availability: true,
        rating: 4.8,
        reviewCount: 94
      },
      {
        id: '3',
        name: 'Tropical Beach House',
        description: 'Private beachfront property surrounded by palm trees',
        location: { city: params.location || 'Bali', country: 'Indonesia' },
        pricing: { nightlyRate: 650, currency: 'USD' },
        capacity: { guests: 6, bedrooms: 3, beds: 3, bathrooms: 2 },
        images: [{ url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800', isPrimary: true }],
        amenities: [],
        availability: true,
        rating: 4.9,
        reviewCount: 203
      },
      {
        id: '4',
        name: 'Coastal Dream Villa',
        description: 'Beautiful coastal property with infinity pool',
        location: { city: params.location || 'Santorini', country: 'Greece' },
        pricing: { nightlyRate: 750, currency: 'USD' },
        capacity: { guests: 6, bedrooms: 3, beds: 3, bathrooms: 2 },
        images: [{ url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800', isPrimary: true }],
        amenities: [],
        availability: true,
        rating: 4.7,
        reviewCount: 89
      },
      {
        id: '5',
        name: 'Luxury Hillside Estate',
        description: 'Spectacular views and modern amenities',
        location: { city: params.location || 'Tuscany', country: 'Italy' },
        pricing: { nightlyRate: 920, currency: 'USD' },
        capacity: { guests: 8, bedrooms: 4, beds: 4, bathrooms: 3 },
        images: [{ url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800', isPrimary: true }],
        amenities: [],
        availability: true,
        rating: 4.8,
        reviewCount: 134
      },
      {
        id: '6',
        name: 'Seaside Retreat Villa',
        description: 'Private beach access and stunning sunsets',
        location: { city: params.location || 'Maldives', country: 'Maldives' },
        pricing: { nightlyRate: 980, currency: 'USD' },
        capacity: { guests: 6, bedrooms: 3, beds: 3, bathrooms: 2 },
        images: [{ url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', isPrimary: true }],
        amenities: [],
        availability: true,
        rating: 4.9,
        reviewCount: 176
      },
    ]

    return {
      villas: mockVillas,
      total: mockVillas.length,
      page: params.page || 1,
      pageSize: params.pageSize || 12,
      totalPages: Math.ceil(mockVillas.length / (params.pageSize || 12))
    }
  } catch (error) {
    console.error('Error searching villas:', error)
    return {
      villas: [],
      total: 0,
      page: 1,
      pageSize: 12,
      totalPages: 0,
    }
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const filters: SearchParams = {
    location: searchParams.location,
    checkIn: searchParams.checkIn,
    checkOut: searchParams.checkOut,
    guests: searchParams.guests ? parseInt(searchParams.guests) : undefined,
    minPrice: searchParams.minPrice ? parseFloat(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? parseFloat(searchParams.maxPrice) : undefined,
    amenities: searchParams.amenities?.split(','),
    page: searchParams.page ? parseInt(searchParams.page) : 1,
    pageSize: 12,
  }

  const results = await getSearchResults(filters)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {searchParams.location ? `Villas in ${searchParams.location}` : 'Search Luxury Villas'}
          </h1>
          <p className="text-gray-600 text-lg">
            {results.total} {results.total === 1 ? 'property' : 'properties'} available
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SearchFilters currentFilters={filters} />
            </div>
          </aside>

          {/* Results */}
          <div className="lg:col-span-3">
            {results.villas.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl">
                <svg className="w-20 h-20 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-semibold mb-3">No villas found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We couldn't find any properties matching your search criteria. Try adjusting your filters or dates.
                </p>
                <a href="/search" className="btn btn-primary inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Clear All Filters
                </a>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {results.villas.map((villa) => (
                    <VillaCard key={villa.id} villa={villa} />
                  ))}
                </div>

                {results.totalPages > 1 && (
                  <Pagination
                    currentPage={results.page}
                    totalPages={results.totalPages}
                    searchParams={searchParams}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
