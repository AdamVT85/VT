import DestinationsGrid from '@/components/DestinationsGrid'

export default function DestinationsPage() {
  return (
    <div className="bg-stone min-h-screen">
      <div className="bg-terracotta text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-serif mb-4 font-light">Our Destinations</h1>
          <p className="text-xl text-stone-light max-w-3xl mx-auto">
            Explore our handpicked collection of beautiful destinations across the Mediterranean
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
