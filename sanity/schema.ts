import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/product-schema'
import category from './schemas/category-schema'
import subcategory from './schemas/subcategory-schema'
import userProfile from './schemas/userProfile-schema'
import cartItem from './schemas/cartItem-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, subcategory, product, userProfile, cartItem],
}
