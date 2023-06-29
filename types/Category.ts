import { Subcategory } from "./Subcategory";

export type Category = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    subcategory: Subcategory[];
    image: string;
  }
  