import { Heart, MapPin, Home, Award, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Warm Welcomes',
    description: 'Trusted advice, personal service, and people who care deeply about your perfect holiday'
  },
  {
    icon: MapPin,
    title: 'Authentic Experiences',
    description: 'A sincere desire to share the true character and spirit of our Mediterranean destinations'
  },
  {
    icon: Home,
    title: 'Quality Villas',
    description: 'Carefully chosen properties - every villa personally inspected by our regional specialists'
  },
  {
    icon: Users,
    title: 'Expert Local Knowledge',
    description: 'Our team regularly visits all destinations, living and breathing the Mediterranean'
  },
  {
    icon: Award,
    title: 'Award Winning Service',
    description: 'Telegraph\'s Best Villa Operator with over 30 years of trusted expertise'
  },
  {
    icon: Clock,
    title: 'Year-Round Support',
    description: 'Local representatives in all destinations to assist you throughout your stay'
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4 font-light">
            The Art of the Mediterranean
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Inspired by our destinations, everything we do is influenced by the authenticity, 
            character, and warmth of the Mediterranean
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-clay text-terracotta rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
