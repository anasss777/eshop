import clientConfig from '@/sanity/lib/client';
import { UserProfile } from '@/types/UserProfile';
import { createClient } from 'next-sanity';
import { NextRequest } from 'next/server';

const client = createClient(clientConfig);

export async function POST(req: NextRequest) {
  const body = await req.json()
  await client.create({
    _type: body._type,
    name: body.name,  
    email: body.email,
    cartItems: body.cartItems,
  })
  console.log(body);
  
  return new Response("OK")
}

export async function DELETE(req: NextRequest) {
  await client
  .delete({query: `*[_type == "userProfile"]`})
  .then(() => {
    console.log('Deleted successfully!')
  })
  .catch((err) => {
    console.error('Delete failed: ', err.message)
  })
}

export async function UPDATE(req: NextRequest) {
  const body = await req.json()
  await client
  .patch(body._id)
  .append('cartItems', [body.cartItems])
  .commit({autoGenerateArrayKeys: true})
  console.log(body);

  return new Response("OK")
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  await client
  .patch(body._id)
  .set({cartItems: body.cartItems})
  .commit()
  console.log(body);

  return new Response("OK")
}