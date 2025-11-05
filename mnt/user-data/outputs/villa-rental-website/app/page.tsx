import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import FeaturedVillas from '@/components/FeaturedVillas'
import DestinationsGrid from '@/components/DestinationsGrid'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseUs from '@/components/WhyChooseUs'

export default async function Home() {
  return (
    <>
      <Hero />
      
      <section className="relative -mt-8 z-10">
        <div className="container-custom">
          <SearchBar />
        </div>
      </section>

      <section className="py-16 bg-stone">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4 font-light">
              Carefully Chosen Villas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We personally visit every property, know every location, and care deeply 
              about matching people with the holiday that's right for them
            </p>
          </div>
          <FeaturedVillas />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4 font-light">
              Discover the True Mediterranean
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From sun-warmed terracotta and the scents of a garden at dusk, to morning rituals 
              of fresh bread and coffee - experience the authentic character of every region
            </p>
          </div>
          <DestinationsGrid />
        </div>
      </section>

      <WhyChooseUs />

      <section className="py-16 bg-stone">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4 font-light">
              What Our Guests Say
            </h2>
            <p className="text-lg text-gray-600">
              Read reviews from our satisfied guests
            </p>
          </div>
          <TestimonialsSection />
        </div>
      </section>

      <section className="py-20 bg-terracotta text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-serif mb-6 font-light">
            Ready to Find Your Perfect Villa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Speak to our expert team who can guide you to your ideal holiday home, 
            with the warmth and personal service we're known for
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/villas" className="bg-white text-terracotta px-8 py-3 rounded-md hover:bg-stone transition-colors font-medium">
              Browse All Villas
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-terracotta-dark transition-colors font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
