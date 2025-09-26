import { StarIcon } from '@heroicons/react/16/solid'
import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
      description: 'e.g., "Homeowner", "General Contractor", "Architect"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company/Location',
      type: 'string',
      description: 'e.g., "Miami, FL" or "ABC Construction"',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '5 Stars', value: 5 },
          { title: '4 Stars', value: 4 },
          { title: '3 Stars', value: 3 },
        ],
      },
      initialValue: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'projectReference',
      title: 'Related Project',
      type: 'reference',
      to: { type: 'gallery' },
      description: 'Link to a specific project if applicable',
    }),
    defineField({
      name: 'productUsed',
      title: 'Product Used',
      type: 'reference',
      to: { type: 'product' },
    }),
    defineField({
      name: 'image',
      title: 'Client Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this testimonial on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      role: 'role',
      company: 'company',
      media: 'image',
    },
    prepare(selection) {
      const { role, company } = selection
      return { ...selection, subtitle: `${role}${company ? ` - ${company}` : ''}` }
    },
  },
})