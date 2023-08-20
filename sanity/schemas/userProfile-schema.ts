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
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'cartItems',
        title: 'CartItems',
        type: 'array',
        of: [{type: 'cartItem'}]
      }
    ]
  }

export default userProfile