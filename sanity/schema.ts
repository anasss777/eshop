import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/product-schema'
import category from './schemas/category-schema'
import subcategory from './schemas/subcategory-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, subcategory, product],
}
