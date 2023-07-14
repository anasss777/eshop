"use client";

import { Product } from "@/types/Product";
import React, { createContext, useState } from "react";

interface CartItem {
  product: Product;
  quantity: number;
}

export interface contextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;

  addToCart: (item: CartItem) => void;
}

const TheContext = createContext<contextType | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.product === item.product
    );
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.product === item.product
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <TheContext.Provider
      value={{
        isOpen,
        setIsOpen,

        cartItems,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export { TheContext, ContextProvider };
