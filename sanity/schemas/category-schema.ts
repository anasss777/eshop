export const category = {
    name: 'category',
    title: 'Category',
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
        name: 'subcategory',
        title: 'Subcategory',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'subcategory' }],
          }
        ]
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
          options: {
            hotspot: true,
          }
      }
    ]
  }

export default category