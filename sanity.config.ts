'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schema'

export default defineConfig({
  name: 'TW Surface Company',
  title: 'The Workshop Surface Company CMS',
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
})
