export const cartItem = {
    name: 'cartItem',
    title: 'CartItem',
    type: 'document',
    fields: [
      { 
        name: 'product',
        title: 'Product',
        type: 'product',
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
      }
    ]
  }

export default cartItem