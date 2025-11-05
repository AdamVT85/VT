import Image from 'next/image'

interface HeroProps {
  title?: string
  subtitle?: string
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="relative h-[600px] bg-gray-900">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=600&fit=crop"
          alt="Beautiful Mediterranean villa with pool"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 font-light">
            {title || "The Art of the Mediterranean"}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-light font-light">
            {subtitle || "Handpicked villas with private pools in beautiful destinations"}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/villas" className="bg-terracotta text-white px-8 py-3 rounded-md hover:bg-terracotta-dark transition-colors font-medium">
              Explore Villas
            </a>
            <a href="/destinations" className="bg-white text-terracotta px-8 py-3 rounded-md hover:bg-stone transition-colors font-medium">
              View Destinations
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
