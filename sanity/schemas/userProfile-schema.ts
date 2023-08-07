export const userProfile = {
    name: 'userProfile',
    title: 'UserProfile',
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
        name: 'email',
        title: 'Email',
        type: 'string',
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

export default userProfile