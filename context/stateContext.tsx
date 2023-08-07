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

  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;

  addToCart: (item: CartItem) => void;

  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product, qty: number) => void;
  handleQuantityChange: (product: Product, quantity: number) => void;
  decreaseQuantity: (product: Product) => void;
}

const TheContext = createContext<contextType | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

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

  const removeFromCart = (product: Product) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.product._id !== product._id
    );
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (product: Product, qty: number) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.product === product
        ? { ...cartItem, quantity: cartItem.quantity + qty }
        : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (product: Product, quantity: number) => {
    if (quantity > 0) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.product === product ? { ...cartItem, quantity } : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  const decreaseQuantity = (product: Product) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.product === product && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  };

  return (
    <TheContext.Provider
      value={{
        isOpen,
        setIsOpen,

        cartItems,
        setCartItems,
        addToCart,

        showCart,
        setShowCart,

        removeFromCart,
        increaseQuantity,
        handleQuantityChange,
        decreaseQuantity,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export { TheContext, ContextProvider };
