import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Sanity GROQ Queries
export const queries = {
  homepage: `*[_type == "homepage"][0]{
    title,
    hero,
    featuredSection,
    destinations,
    testimonials,
    seo
  }`,
  
  destinations: `*[_type == "destination"] | order(order asc){
    _id,
    name,
    slug,
    description,
    image,
    villaCount
  }`,
  
  destinationBySlug: (slug: string) => `*[_type == "destination" && slug.current == "${slug}"][0]{
    _id,
    name,
    slug,
    description,
    longDescription,
    image,
    gallery,
    highlights,
    seo
  }`,
  
  staticPage: (slug: string) => `*[_type == "page" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    content,
    seo
  }`,
}
