import { Category } from "@/types/Category";
import { createClient, groq } from "next-sanity";
import clientConfig from "./lib/client";
import { Product } from "@/types/Product";
import { Subcategory } from "@/types/Subcategory";

export async function getProducts(): Promise<Product[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image[].asset->url,
      price,
      details,
      category->{
        name,
        'image': image.asset->url,
        "slug": slug.current
      },
      subcategory->{
        name,
        "slug": slug.current,
        'image': image.asset->url,
      }
    }`
  )
}

export async function getCategories(): Promise<Category[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "category"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        subcategory[]->{
          name,
          "slug": slug.current,
          'image': image.asset->url,
        }
      }`
    )
  }
  
  export async function getSubcategories(): Promise<Subcategory[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "subcategory"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        'image': image.asset->url,
        category->{
          name,
          "slug": slug.current,
          'image': image.asset->url,
        }
      }`
    );
  }
