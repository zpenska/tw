import { PhotoIcon } from '@heroicons/react/16/solid'
import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Project Gallery',
  type: 'document',
  icon: PhotoIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Boca Raton, FL"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Municipal', value: 'municipal' },
          { title: 'Hospitality', value: 'hospitality' },
          { title: 'Retail', value: 'retail' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'squareFeet',
      title: 'Square Footage',
      type: 'number',
      description: 'Project size in square feet',
    }),
    defineField({
      name: 'productUsed',
      title: 'Product Used',
      type: 'reference',
      to: { type: 'product' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project on the homepage',
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
      title: 'title',
      location: 'location',
      type: 'projectType',
      media: 'mainImage',
    },
    prepare(selection) {
      const { location, type } = selection
      return { ...selection, subtitle: `${type} - ${location}` }
    },
  },
})