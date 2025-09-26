import type { SchemaTypeDefinition } from 'sanity'

import { authorType } from './types/author'
import { blockContentType } from './types/block-content'
import { categoryType } from './types/category'
import { postType } from './types/post'
import { productType } from './types/product'
import { galleryType } from './types/gallery'
import { testimonialType } from './types/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    postType,
    categoryType,
    authorType,
    productType,
    galleryType,
    testimonialType
  ],
}
