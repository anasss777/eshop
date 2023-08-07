import { PortableTextBlock } from "sanity";
import { Category } from "./Category";
import { Subcategory } from "./Subcategory";

export type Product = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string[];
  price: number;
  quantity: number;
  details: PortableTextBlock[];
  category: Category;
  subcategory: Subcategory;
}
