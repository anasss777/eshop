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
        name: 'phoneNumber',
        title: 'Phone number',
        type: 'number'
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
      },
      {
        name: 'state',
        title: 'State',
        type: 'string',
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
      },
      {
        name: 'zipCode',
        title: 'Zip code',
        type: 'number',
      }
    ]
  }

export default userProfile