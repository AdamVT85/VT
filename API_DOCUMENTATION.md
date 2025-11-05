# API Documentation

## Salesforce Commerce Cloud Integration

### Overview

The website integrates with Salesforce Commerce Cloud to fetch villa data including listings, details, and availability.

### Configuration

Set these environment variables:

```env
NEXT_PUBLIC_SALESFORCE_API_URL=https://your-instance.salesforce.com/services/data/v58.0
SALESFORCE_CLIENT_ID=your_client_id
SALESFORCE_CLIENT_SECRET=your_client_secret
SALESFORCE_USERNAME=your_username
SALESFORCE_PASSWORD=your_password
SALESFORCE_SECURITY_TOKEN=your_security_token
```

### Available Methods

#### `salesforceClient.searchVillas(params)`

Search for villas with various filters.

**Parameters:**
```typescript
{
  destination?: string      // e.g., "Spain", "France"
  checkIn?: string          // ISO date string
  checkOut?: string         // ISO date string
  guests?: number           // Number of guests
  minPrice?: number         // Minimum weekly price
  maxPrice?: number         // Maximum weekly price
  bedrooms?: number         // Minimum bedrooms
  page?: number             // Page number (default: 1)
  limit?: number            // Results per page (default: 12)
}
```

**Returns:**
```typescript
{
  villas: Villa[]
  total: number
}
```

**Example:**
```typescript
const { villas, total } = await salesforceClient.searchVillas({
  destination: 'Spain',
  bedrooms: 3,
  maxPrice: 2000,
  page: 1,
  limit: 12
})
```

#### `salesforceClient.getVillaById(id)`

Get detailed information about a specific villa.

**Parameters:**
- `id` (string): Salesforce record ID

**Returns:**
```typescript
Villa | null
```

**Example:**
```typescript
const villa = await salesforceClient.getVillaById('a1b2c3d4e5f6')
```

#### `salesforceClient.getDestinations()`

Get list of all destinations with villa counts.

**Returns:**
```typescript
Array<{
  name: string
  count: number
}>
```

**Example:**
```typescript
const destinations = await salesforceClient.getDestinations()
// [{ name: "Spain", count: 45 }, { name: "France", count: 32 }, ...]
```

### Villa Object Structure

```typescript
interface Villa {
  id: string                    // Salesforce record ID
  name: string                  // Villa name
  description: string           // Short description
  longDescription: string       // Full description
  location: string              // e.g., "Mallorca, Spain"
  destination: string           // Country name
  price: number                 // Weekly rental price
  currency: string              // e.g., "GBP", "EUR"
  bedrooms: number
  bathrooms: number
  sleeps: number                // Maximum guests
  images: string[]              // Array of image URLs
  amenities: string[]           // Array of amenity names
  features: string[]            // Array of feature descriptions
  latitude?: number             // GPS coordinate
  longitude?: number            // GPS coordinate
  availability: Array<{         // Availability windows
    startDate: string
    endDate: string
  }>
}
```

## Sanity CMS Integration

### Overview

Sanity CMS manages static content like homepage text, destination information, and general pages.

### Configuration

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Available Queries

#### Get Homepage Content

```typescript
import { sanityClient, queries } from '@/lib/sanity'

const homepage = await sanityClient.fetch(queries.homepage)
```

**Returns:**
```typescript
{
  title: string
  hero: {
    heading: string
    subheading: string
    image: SanityImage
    ctaButtons: Array<{
      text: string
      link: string
      style: 'primary' | 'secondary'
    }>
  }
  featuredSection: {
    title: string
    description: string
  }
  testimonials: Array<{
    name: string
    location: string
    rating: number
    text: string
    villa: string
  }>
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
    ogImage: SanityImage
  }
}
```

#### Get All Destinations

```typescript
const destinations = await sanityClient.fetch(queries.destinations)
```

**Returns:**
```typescript
Array<{
  _id: string
  name: string
  slug: { current: string }
  description: string
  image: SanityImage
  villaCount: number
}>
```

#### Get Destination by Slug

```typescript
const destination = await sanityClient.fetch(
  queries.destinationBySlug('spain')
)
```

**Returns:**
```typescript
{
  _id: string
  name: string
  slug: { current: string }
  description: string
  longDescription: PortableTextBlock[]
  image: SanityImage
  gallery: SanityImage[]
  highlights: string[]
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}
```

#### Get Static Page

```typescript
const page = await sanityClient.fetch(queries.staticPage('about'))
```

**Returns:**
```typescript
{
  _id: string
  title: string
  slug: { current: string }
  content: PortableTextBlock[]
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}
```

### Image URL Helper

Convert Sanity image references to URLs:

```typescript
import { urlFor } from '@/lib/sanity'

const imageUrl = urlFor(sanityImage)
  .width(800)
  .height(600)
  .url()
```

## Error Handling

### Salesforce Errors

```typescript
try {
  const villas = await salesforceClient.searchVillas(params)
} catch (error) {
  console.error('Salesforce API error:', error)
  // Handle error (show message to user, log to service, etc.)
}
```

Common errors:
- **Authentication failed**: Check credentials and security token
- **CORS error**: Verify CORS settings in Salesforce
- **Rate limit**: Implement request throttling
- **Invalid query**: Check SOQL syntax

### Sanity Errors

```typescript
try {
  const data = await sanityClient.fetch(query)
} catch (error) {
  console.error('Sanity fetch error:', error)
  // Handle error
}
```

Common errors:
- **Invalid project ID**: Verify NEXT_PUBLIC_SANITY_PROJECT_ID
- **GROQ syntax error**: Check query syntax
- **Permission denied**: Verify API token permissions

## Best Practices

### Caching

Implement caching for better performance:

```typescript
// Next.js 14 App Router caching
export const revalidate = 3600 // Revalidate every hour

async function getVillas() {
  const villas = await salesforceClient.searchVillas({})
  return villas
}
```

### Error Boundaries

Wrap API calls in error boundaries:

```typescript
export default function VillasPage() {
  return (
    <ErrorBoundary fallback={<ErrorDisplay />}>
      <VillasList />
    </ErrorBoundary>
  )
}
```

### Loading States

Always show loading states:

```typescript
'use client'

export default function VillasList() {
  const [loading, setLoading] = useState(true)
  const [villas, setVillas] = useState([])

  useEffect(() => {
    async function fetchVillas() {
      setLoading(true)
      try {
        const data = await salesforceClient.searchVillas({})
        setVillas(data.villas)
      } finally {
        setLoading(false)
      }
    }
    fetchVillas()
  }, [])

  if (loading) return <LoadingSpinner />
  return <VillaGrid villas={villas} />
}
```

### Request Optimization

Batch requests when possible:

```typescript
// Instead of multiple individual requests
const [villas, destinations] = await Promise.all([
  salesforceClient.searchVillas({}),
  salesforceClient.getDestinations()
])
```

## Rate Limits

### Salesforce
- Default: 15,000 API calls per 24 hours
- Monitor usage in Salesforce Setup → System Overview
- Implement caching to reduce API calls

### Sanity
- Free tier: 100,000 API requests per month
- Implement CDN caching for images
- Use webhooks for content updates

## Security

### Environment Variables
- Never commit `.env.local` to Git
- Use Netlify environment variables in production
- Rotate API tokens regularly

### API Keys
- Keep Salesforce credentials secure
- Use read-only permissions where possible
- Implement rate limiting on your endpoints

## Monitoring

### Recommended Tools
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Datadog**: Performance monitoring

### Key Metrics to Monitor
- Salesforce API response times
- Salesforce API error rates
- Sanity CDN hit rates
- Page load times
- Search query performance

## Support

For API issues:
- Salesforce: Check Salesforce Status (status.salesforce.com)
- Sanity: Check Sanity Status (status.sanity.io)
- Review API logs in respective dashboards
