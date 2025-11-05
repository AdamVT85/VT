import Image from 'next/image'
import { Heart, MapPin, Home } from 'lucide-react'

export default function AboutPage() {
  const pillars = [
    {
      icon: Heart,
      title: 'Warm Welcomes',
      description: 'Trusted advice, personal service, and people who care'
    },
    {
      icon: MapPin,
      title: 'Authentic Experiences',
      description: 'A sincere desire to share the true character of our destinations'
    },
    {
      icon: Home,
      title: 'Quality Villas',
      description: 'Carefully chosen properties - and time taken to do things well'
    },
  ]

  return (
    <div className="bg-white">
      <div className="bg-terracotta text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-serif mb-4 font-light">The Art of the Mediterranean</h1>
          <p className="text-xl text-stone-light max-w-3xl mx-auto">
            Inspired by our destinations, sharing the spirit of the region we love
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
                The feeling of sun-warmed terracotta, and the scents and sounds of a garden at 
                dusk. Morning rituals of fresh bread and coffee, and the joys of a shared dinner.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                There's more to our properties and destinations than geography, and we want to 
                reveal the true spirit of every place - with carefully chosen villas, and the service 
                and local knowledge of our experienced team.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Inspired by a family passion for authentic Mediterranean destinations, 
                Vintage Travel pairs people with carefully chosen villas in beautiful 
                locations, helping them discover the true character of the Med.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We personally visit every property, know every location, and care deeply 
                about matching people with the holiday that's right for them. At Vintage Travel 
                we take care of more than accommodation; our dedicated and expert team delivers 
                trust, confidence, comfort, and timeless experiences rooted in the spirit of 
                every destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone">
        <div className="container-custom">
          <h2 className="text-4xl font-serif text-center mb-12 font-light">What Unifies Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div key={index} className="bg-white p-8 rounded-lg text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-clay text-terracotta rounded-full mb-4">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-xl font-serif mb-2 font-medium">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="bg-terracotta text-white rounded-xl p-12 text-center">
            <h2 className="text-4xl font-serif mb-6 font-light">Ready to Experience the Mediterranean?</h2>
            <p className="text-xl text-stone-light mb-8 max-w-2xl mx-auto">
              The confidence that we'll pair you with carefully chosen villas in beautiful destinations, 
              with excellent service and local expertise
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/villas" className="bg-white text-terracotta px-8 py-3 rounded-md hover:bg-stone transition-colors font-medium">
                Browse Villas
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-terracotta-dark transition-colors font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
