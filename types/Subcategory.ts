import { Category } from "./Category";

export type Subcategory = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    category: Category;
}