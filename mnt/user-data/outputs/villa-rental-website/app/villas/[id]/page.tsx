import Image from 'next/image'
import { Bed, Users, Bath, Wifi, Wind, Car, Utensils, Tv, MapPin, Star } from 'lucide-react'
import BookingCard from '@/components/BookingCard'

// This would fetch from Salesforce in production using salesforceClient.getVillaById(id)
const getMockVilla = (id: string) => ({
  id,
  name: 'Villa Solana',
  location: 'Cala d\'Or, Mallorca, Spain',
  description: 'Beautiful traditional villa with stunning sea views',
  longDescription: `Villa Solana is a beautiful traditional Mallorcan villa set in peaceful countryside with stunning views across the bay. The villa has been lovingly restored to retain its original character while providing all modern comforts.

The spacious interior features high beamed ceilings, terracotta floors, and traditional furnishings creating a warm and welcoming atmosphere. Large windows throughout flood the rooms with natural light and frame the spectacular views.

Outside, the extensive grounds offer complete privacy with mature gardens, several terraces for dining al fresco, and a beautiful swimming pool with sun loungers. The covered terrace is perfect for enjoying meals while taking in the magnificent sea views.`,
  price: 1250,
  currency: 'GBP',
  bedrooms: 4,
  bathrooms: 3,
  sleeps: 8,
  images: [
    'https://via.placeholder.com/1200x800/c07d47/ffffff?text=Villa+Exterior',
    'https://via.placeholder.com/1200x800/c07d47/ffffff?text=Pool+Area',
    'https://via.placeholder.com/1200x800/c07d47/ffffff?text=Living+Room',
    'https://via.placeholder.com/1200x800/c07d47/ffffff?text=Kitchen',
    'https://via.placeholder.com/1200x800/c07d47/ffffff?text=Master+Bedroom',
    'https://via.placeholder.com/1200x800/c07d47/ffffff?text=Bathroom',
  ],
  amenities: [
    { name: 'Air Conditioning', icon: Wind },
    { name: 'WiFi', icon: Wifi },
    { name: 'Fully Equipped Kitchen', icon: Utensils },
    { name: 'TV & Entertainment', icon: Tv },
    { name: 'Parking', icon: Car },
  ],
  features: [
    'Private swimming pool (10m x 5m)',
    'Sea views',
    'Covered outdoor dining area',
    'BBQ facilities',
    'Landscaped gardens',
    'Washing machine',
    'Dishwasher',
    'Satellite TV',
    'CD/DVD player',
    'Pool towels provided',
    'Welcome pack included',
  ],
  checkInTime: '4:00 PM',
  checkOutTime: '10:00 AM',
  minimumStay: 7,
  latitude: 39.3754,
  longitude: 3.2197,
})

export default async function VillaDetailPage({ params }: { params: { id: string } }) {
  // In production: const villa = await salesforceClient.getVillaById(params.id)
  const villa = getMockVilla(params.id)

  if (!villa) {
    return <div>Villa not found</div>
  }

  return (
    <div className="bg-white">
      {/* Image Gallery */}
      <div className="relative">
        <div className="grid grid-cols-4 gap-2 h-[500px]">
          <div className="col-span-4 md:col-span-2 relative">
            <Image
              src={villa.images[0]}
              alt={villa.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden md:grid col-span-2 grid-cols-2 gap-2">
            {villa.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={image}
                  alt={`${villa.name} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-primary-600 mb-2">
                <MapPin size={20} />
                <span className="text-lg">{villa.location}</span>
              </div>
              <h1 className="text-4xl font-serif text-gray-900 mb-4">{villa.name}</h1>
              <p className="text-xl text-gray-600">{villa.description}</p>
            </div>

            <div className="flex items-center gap-8 py-6 border-y border-gray-200 mb-8">
              <div className="flex items-center gap-2">
                <Bed className="text-primary-600" />
                <span className="text-gray-900">
                  <strong>{villa.bedrooms}</strong> Bedrooms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="text-primary-600" />
                <span className="text-gray-900">
                  <strong>{villa.bathrooms}</strong> Bathrooms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-primary-600" />
                <span className="text-gray-900">
                  Sleeps <strong>{villa.sleeps}</strong>
                </span>
              </div>
            </div>

            {/* Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">About This Villa</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                {villa.longDescription}
              </div>
            </section>

            {/* Features */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {villa.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Star size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {villa.amenities.map((amenity, index) => {
                  const Icon = amenity.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="text-primary-600" size={24} />
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Check-in Details */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Check-in Details</h2>
              <div className="bg-sand-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Check-in</p>
                    <p className="text-lg font-semibold">{villa.checkInTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Check-out</p>
                    <p className="text-lg font-semibold">{villa.checkOutTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Minimum Stay</p>
                    <p className="text-lg font-semibold">{villa.minimumStay} nights</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Location Map */}
            <section className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Location</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-600">Map will be integrated here</p>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingCard villa={villa} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
