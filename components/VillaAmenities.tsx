export default function VillaAmenities({ amenities }: any) {
  const defaultAmenities = [
    { icon: 'wifi', name: 'High-Speed WiFi' },
    { icon: 'kitchen', name: 'Fully Equipped Kitchen' },
    { icon: 'ac', name: 'Air Conditioning' },
    { icon: 'pool', name: 'Private Pool' },
    { icon: 'parking', name: 'Free Parking' },
    { icon: 'tv', name: 'Smart TV' },
    { icon: 'washer', name: 'Washer & Dryer' },
    { icon: 'gym', name: 'Fitness Center' },
  ]

  const amenitiesList = amenities && amenities.length > 0 ? amenities : defaultAmenities

  return (
    <section className="mb-12 pb-12 border-b">
      <h2 className="text-2xl font-bold mb-6">What this place offers</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {amenitiesList.map((amenity: any, index: number) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
            <svg className="w-6 h-6 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{amenity.name}</span>
          </div>
        ))}
      </div>
      <button className="mt-6 btn btn-outline">
        Show all amenities
      </button>
    </section>
  )
}
