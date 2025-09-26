import { CubeIcon } from '@heroicons/react/16/solid'
import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: CubeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
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
      name: 'series',
      title: 'Product Series',
      type: 'string',
      options: {
        list: [
          { title: 'VubaMac Base System', value: 'base' },
          { title: 'Classic Series', value: 'classic' },
          { title: 'Premium Series', value: 'premium' },
          { title: 'Ultra Series', value: 'ultra' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range (per sq ft)',
      type: 'string',
      description: 'e.g., "$18-22"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'colorOptions',
      title: 'Available Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Color Name' },
            { name: 'hex', type: 'string', title: 'Color Code' },
            { name: 'image', type: 'image', title: 'Color Sample' },
          ],
        },
      ],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
      ],
    }),
    defineField({
      name: 'specifications',
      title: 'Technical Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Specification' },
            { name: 'value', type: 'string', title: 'Value' },
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'installationTime',
      title: 'Installation Time',
      type: 'string',
      description: 'e.g., "48 hours"',
    }),
    defineField({
      name: 'warranty',
      title: 'Warranty',
      type: 'string',
      description: 'e.g., "25 years"',
    }),
    defineField({
      name: 'floodResistant',
      title: 'Flood Resistant',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'voc',
      title: 'VOC Emissions',
      type: 'string',
      initialValue: 'Zero',
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
      series: 'series',
      media: 'mainImage',
    },
    prepare(selection) {
      const { series } = selection
      return { ...selection, subtitle: series && `${series}` }
    },
  },
})