import { CartItem } from "./CartItem";

export type UserProfile = {
    _id: string;
    _createdAt: Date;
    _type: UserProfile;
    name: string;
    email: string;
    cartItems: CartItem[];
  }
  