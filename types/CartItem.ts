import { Product } from "./Product";

export type CartItem = {
    _id: string;
    _createdAt: Date;
    product: Product;
    quantity: number;
}