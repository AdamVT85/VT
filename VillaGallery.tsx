'use client'
import { useState } from 'react'
import Image from 'next/image'

interface VillaGalleryProps {
  images: any[]
  villaName: string
}

export default function VillaGallery({ images, villaName }: VillaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showModal, setShowModal] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="h-[500px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid md:grid-cols-4 gap-2 h-[500px] mb-8">
        <div className="md:col-span-3 relative cursor-pointer" onClick={() => setShowModal(true)}>
          <Image
            src={images[selectedImage]?.url || 'https://via.placeholder.com/1200x800'}
            alt={villaName}
            fill
            className="object-cover rounded-l-xl"
            priority
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative h-full cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={`${villaName} ${index + 1}`}
                fill
                className={`object-cover ${index === 3 ? 'rounded-br-xl' : ''} ${
                  selectedImage === index ? 'ring-4 ring-primary-600' : ''
                }`}
              />
              {index === 3 && images.length > 4 && (
                <div 
                  className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold hover:bg-black/70 transition"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowModal(true)
                  }}
                >
                  <span className="text-lg">+{images.length - 4} more</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full gallery */}
      {showModal && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>
          <div className="max-w-6xl w-full">
            <div className="relative aspect-video">
              <Image
                src={images[selectedImage]?.url}
                alt={`${villaName} gallery`}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative w-24 h-24 flex-shrink-0 cursor-pointer ${
                    idx === selectedImage ? 'ring-2 ring-white' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(idx)
                  }}
                >
                  <Image src={img.url} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
