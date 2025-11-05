export default function VillaLocation({ location }: any) {
  return (
    <section className="mb-12 pb-12 border-b">
      <h2 className="text-2xl font-bold mb-6">Where you'll be</h2>
      <div className="bg-gray-100 h-96 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
        <div className="text-center text-gray-600 z-10">
          <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="font-medium">Map Integration</p>
          <p className="text-sm">Google Maps API can be integrated here</p>
        </div>
      </div>
      <div>
        <p className="text-gray-900 font-semibold text-lg mb-2">
          {location.city}, {location.country}
        </p>
        {location.address && (
          <p className="text-gray-600">{location.address}</p>
        )}
        <div className="mt-4 text-sm text-gray-600">
          <p>Exact location provided after booking</p>
        </div>
      </div>
    </section>
  )
}
