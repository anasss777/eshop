import clientConfig from "@/sanity/lib/client";
import { createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const client = createClient(clientConfig);

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.create({
      _type: "userProfile",
      name: name,
      email: email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  await client
    .delete({ query: `*[_type == 'userProfile']` })
    .then(() => {
      console.log("Deleted successfully!");
    })
    .catch((err) => {
      console.error("Delete failed: ", err.message);
    });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  await client
    .patch(body._id)
    .set({
      cart: body.cart,
      phoneNumber: body.phoneNumber,
      country: body.country,
      city: body.city,
      region: body.region,
      zipCode: body.zipCode,
    })
    .commit();
  console.log(body);

  return new Response("OK");
}
