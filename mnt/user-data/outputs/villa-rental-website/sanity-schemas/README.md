# Sanity CMS Schema Files

These schema files define the content structure for your Sanity Studio.

## Setup Instructions

1. **If you don't have a Sanity Studio yet:**

   ```bash
   npm create sanity@latest
   ```

   Follow the prompts to:
   - Choose a project name
   - Select dataset (use "production")
   - Choose a template (start with "Clean project")

2. **Add these schemas to your Sanity Studio:**

   Copy these files to your Sanity Studio's schema directory:
   ```
   your-sanity-studio/
   └── schemas/
       ├── homepage.ts
       ├── destination.ts
       └── page.ts
   ```

3. **Update the schema index file:**

   In `schemas/index.ts`, import and add these schemas:

   ```typescript
   import homepage from './homepage'
   import destination from './destination'
   import page from './page'

   export const schemaTypes = [homepage, destination, page]
   ```

4. **Deploy your Sanity Studio:**

   ```bash
   sanity deploy
   ```

## Schema Descriptions

### Homepage Schema
Manages all content for the homepage including:
- Hero section (heading, image, CTAs)
- Featured villas section
- Testimonials
- SEO metadata

### Destination Schema
Stores information about travel destinations:
- Name and slug
- Descriptions (short and long)
- Image gallery
- Highlights
- Display order
- SEO settings

### Page Schema
Generic page template for static pages like:
- About Us
- Terms & Conditions
- Privacy Policy
- Any custom pages

## Usage in Next.js

These schemas are queried from your Next.js application using the Sanity client in `lib/sanity.ts`.

Example query:
```typescript
const homepage = await sanityClient.fetch(queries.homepage)
```

## Customization

Feel free to modify these schemas to match your needs:
- Add new fields
- Change field types
- Add validation rules
- Customize preview displays
