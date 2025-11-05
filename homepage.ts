export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The main title for the homepage',
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'ctaButtons',
          title: 'Call to Action Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Button Text', type: 'string' },
                { name: 'link', title: 'Button Link', type: 'string' },
                { name: 'style', title: 'Button Style', type: 'string', options: { list: ['primary', 'secondary'] } },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'featuredSection',
      title: 'Featured Villas Section',
      type: 'object',
      fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'description', title: 'Section Description', type: 'text' },
      ],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Customer Name', type: 'string' },
            { name: 'location', title: 'Customer Location', type: 'string' },
            { name: 'rating', title: 'Rating', type: 'number', validation: Rule => Rule.min(1).max(5) },
            { name: 'text', title: 'Testimonial Text', type: 'text' },
            { name: 'villa', title: 'Villa Name', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
        { name: 'ogImage', title: 'Open Graph Image', type: 'image' },
      ],
    },
  ],
}
