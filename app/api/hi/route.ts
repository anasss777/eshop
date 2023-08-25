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
    slug: {_type: "slug", current: body.slug},
    email: body.email,
    image: body.image,
  })
  console.log(body);
  
  return new Response("OK")
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  await client
  .delete({query: `*[_type == ${body._type}][0]`})
  .then(() => {
    console.log('Deleted successfully!')
  })
  .catch((err) => {
    console.error('Delete failed: ', err.message)
  })
}

export async function PUT(req: NextRequest) {
  const body = await req.json()
  await client
  .patch(body._id)
  .set({name: body.name})
  .commit()
  console.log(body);

  return new Response("OK")
}


// import clientConfig from "@/sanity/lib/client";
// import { createClient } from "next-sanity";
// import { NextRequest } from "next/server";

// const client = createClient(clientConfig);

// // export async function PUT(req: NextRequest) {
// //     const body = await req.json()
// //     await client
// //     .patch(body._id)
// //     .set({cartItems: body.cartItems})
// //     .commit()
// //     console.log(body);

// //     return new Response("OK")
// //   }

// export async function POST(req: NextRequest) {
//   const body = await req.json()
//   await client.create({
//     _type: body._type,
//     product: body.product,
//     quantity: body.quantity,
//   })
//   console.log(body);

//   return new Response("OK")
// }

// export async function DELETE(req: NextRequest) {
//   await client
//   .delete({query: `*[_type == "cartItem"]`})
//   .then(() => {
//     console.log('Deleted successfully!')
//   })
//   .catch((err) => {
//     console.error('Delete failed: ', err.message)
//   })
// }