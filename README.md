# Vintage Travel Villa Rental Website

A modern villa rental website built with Next.js 14, Sanity CMS, and Salesforce Commerce Cloud integration, designed according to official Vintage Travel brand guidelines (September 2025).

## 🎨 Brand Implementation

This website is built to the official Vintage Travel brand guidelines, featuring:

- **Brand Concept**: "The Art of the Mediterranean"
- **Color Palette**: Terracotta, Clay, Stone, Olive, Palm, and Soleil
- **Typography**: Crimson Pro (serif) for headings, Inter (sans-serif) for body text
- **Brand Pillars**: Warm Welcomes, Authentic Experiences, Quality Villas
- **Authentic Messaging**: Emphasizing Mediterranean character, warmth, and personal service

See [BRAND_IMPLEMENTATION.md](BRAND_IMPLEMENTATION.md) for complete details on how the brand guidelines have been applied.

## Features

- 🏠 **Villa Listings**: Browse villas with advanced search and filtering
- 🗺️ **Destination Pages**: Explore different European destinations
- 📝 **Villa Detail Pages**: Comprehensive villa information from Salesforce
- 🎨 **Elegant Design**: Vintage-inspired design with modern UX
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Fast**: Built with Next.js 14 App Router for optimal performance
- 🔍 **SEO Optimized**: Built-in SEO optimization
- 📊 **CMS Integration**: Sanity CMS for static content management
- 🛒 **E-commerce Ready**: Salesforce Commerce Cloud integration for villa data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **E-commerce**: Salesforce Commerce Cloud
- **Icons**: Lucide React
- **Deployment**: Netlify

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A Sanity account ([sanity.io](https://www.sanity.io))
- Salesforce Commerce Cloud access
- Git installed

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd villa-rental-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Then update the variables with your actual credentials:
   
   ```env
   # Sanity CMS Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token

   # Salesforce Commerce Cloud Configuration
   NEXT_PUBLIC_SALESFORCE_API_URL=https://your-instance.salesforce.com/services/data/v58.0
   SALESFORCE_CLIENT_ID=your_salesforce_client_id
   SALESFORCE_CLIENT_SECRET=your_salesforce_client_secret
   SALESFORCE_USERNAME=your_salesforce_username
   SALESFORCE_PASSWORD=your_salesforce_password
   SALESFORCE_SECURITY_TOKEN=your_salesforce_security_token

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Sanity CMS Setup

### 1. Create a Sanity Project

```bash
npm install -g @sanity/cli
sanity init
```

### 2. Configure Sanity Schema

Create a new Sanity studio in a separate directory or within your project. Here's the recommended schema structure:

#### Homepage Schema (`homepage.ts`)
```typescript
export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'subheading', type: 'text' },
        { name: 'image', type: 'image' },
      ],
    },
    {
      name: 'featuredSection',
      title: 'Featured Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
      ],
    },
  ],
}
```

#### Destination Schema (`destination.ts`)
```typescript
export default {
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
```

### 3. Deploy Sanity Studio

```bash
cd your-sanity-studio
sanity deploy
```

## Salesforce Commerce Cloud Setup

### Custom Objects Required

Create the following custom object in Salesforce:

#### Villa__c Object

| Field Name | Type | Description |
|------------|------|-------------|
| Name | Text | Villa name |
| Description__c | Long Text Area | Short description |
| Long_Description__c | Long Text Area | Detailed description |
| Location__c | Text | Location (e.g., "Mallorca, Spain") |
| Destination__c | Text | Destination country |
| Price__c | Currency | Weekly rental price |
| Currency__c | Text | Currency code (e.g., "GBP") |
| Bedrooms__c | Number | Number of bedrooms |
| Bathrooms__c | Number | Number of bathrooms |
| Sleeps__c | Number | Maximum guests |
| Images__c | Long Text Area | JSON array of image URLs |
| Amenities__c | Long Text Area | JSON array of amenities |
| Features__c | Long Text Area | JSON array of features |
| Latitude__c | Number | GPS latitude |
| Longitude__c | Number | GPS longitude |
| Active__c | Checkbox | Whether villa is active |
| Check_In_Time__c | Text | Check-in time |
| Check_Out_Time__c | Text | Check-out time |
| Minimum_Stay__c | Number | Minimum nights |

### API Access Setup

1. Create a Connected App in Salesforce
2. Enable OAuth settings
3. Add the necessary OAuth scopes
4. Note down the Client ID and Client Secret
5. Create an integration user with API access

## Deployment to Netlify

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repository-url>
git push -u origin main
```

### 2. Deploy on Netlify

1. Log in to [Netlify](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Add environment variables from your `.env.local` file
6. Click "Deploy site"

### 3. Configure Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

## Project Structure

```
villa-rental-website/
├── app/
│   ├── about/
│   ├── contact/
│   ├── destinations/
│   ├── villas/
│   │   ├── [id]/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BookingCard.tsx
│   ├── DestinationsGrid.tsx
│   ├── FeaturedVillas.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── SearchBar.tsx
│   ├── SearchFilters.tsx
│   ├── TestimonialsSection.tsx
│   ├── VillaCard.tsx
│   └── WhyChooseUs.tsx
├── lib/
│   ├── salesforce.ts
│   └── sanity.ts
├── public/
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Key Files Explained

### `lib/salesforce.ts`
Handles all Salesforce Commerce Cloud API interactions including:
- Authentication
- Villa search
- Villa detail retrieval
- Destination listings

### `lib/sanity.ts`
Manages Sanity CMS client configuration and queries for:
- Homepage content
- Destination information
- Static pages

### `components/`
Reusable UI components following atomic design principles

### `app/`
Next.js 14 App Router pages and layouts

## API Integration

### Villa Search
Villas are fetched from Salesforce using SOQL queries with support for:
- Destination filtering
- Date range filtering
- Guest count filtering
- Price range filtering
- Bedroom count filtering

### Villa Details
Individual villa pages dynamically fetch complete property information from Salesforce including:
- Property description
- Features and amenities
- Image galleries
- Pricing
- Location data

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* Your primary colors */ },
  sand: { /* Your accent colors */ },
}
```

### Content
Update static content through:
1. **Sanity Studio** for CMS-managed content
2. **Component files** for hardcoded content
3. **Salesforce** for villa data

### Images
Replace placeholder images with actual villa photos in:
- Salesforce (villa-specific images)
- Sanity CMS (destination and marketing images)
- `public/` directory (static assets)

## Features to Implement

The following features are set up but require additional implementation:

- [ ] Booking system integration
- [ ] Payment processing
- [ ] User authentication
- [ ] Booking management dashboard
- [ ] Email notifications
- [ ] Reviews and ratings system
- [ ] Advanced search with map view
- [ ] Calendar availability integration
- [ ] Multi-language support

## Troubleshooting

### Salesforce Connection Issues
- Verify your credentials in `.env.local`
- Ensure the Salesforce user has API access
- Check that the Connected App is properly configured
- Verify security token is appended to password

### Sanity Connection Issues
- Confirm project ID and dataset name
- Check API token permissions
- Ensure CORS origins are configured in Sanity project settings

### Build Issues
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

## Support

For issues or questions:
1. Check the documentation
2. Review GitHub issues
3. Contact the development team

## License

[Your License Here]

## Acknowledgments

- Design inspired by Vintage Travel (vintagetravel.co.uk)
- Built with Next.js, Sanity, and Salesforce Commerce Cloud
- Icons by Lucide React
