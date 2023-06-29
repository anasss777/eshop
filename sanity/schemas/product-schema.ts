export const product = {
    name: 'product',
    title: 'Product',
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
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'subcategory',
        title: 'Subcategory',
        type: 'reference',
        to: [{ type: 'subcategory' }],
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [
          { 
            type: 'image',
            options: {
              hotspot: true,
            }
          }
        ],
      }
    ]
  }

export default product