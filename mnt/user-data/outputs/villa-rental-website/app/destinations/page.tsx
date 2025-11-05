import DestinationsGrid from '@/components/DestinationsGrid'

export default function DestinationsPage() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-serif mb-4">Our Destinations</h1>
          <p className="text-xl text-sand-100 max-w-3xl mx-auto">
            Explore our handpicked collection of beautiful destinations across Europe
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <DestinationsGrid />
        </div>
      </section>
    </div>
  )
}
