export const subcategory = {
    name: 'subcategory',
    title: 'Subcategory',
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
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
          options: {
            hotspot: true,
          }
      },
    ]
  }

export default subcategory