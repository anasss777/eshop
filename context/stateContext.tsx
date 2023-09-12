"use client";

import { Product } from "@/types/Product";
import React, { createContext, useContext, useState } from "react";

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

  setUserName: (user: string) => void;
  setUserEmail: (user: string) => void;
  removeUser: () => void;
}

const TheContext = createContext<contextType | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const setUserName = (userName: string) => {
    try {
      localStorage.setItem("userName", userName);
    } catch (error) {
      console.error("Error setting userName in localStorage:", error);
    }
  };

  const setUserEmail = (userEmail: string) => {
    try {
      localStorage.setItem("userEmail", userEmail);
    } catch (error) {
      console.error("Error setting userEmail in localStorage:", error);
    }
  };

  const removeUser = () => {
    try {
      console.log(`Before removing: ${localStorage.getItem("userName")}`);
      console.log(`Before removing: ${localStorage.getItem("userEmail")}`);
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      console.log(`After removing: ${localStorage.getItem("userName")}`);
      console.log(`After removing: ${localStorage.getItem("userEmail")}`);
    } catch (error) {
      console.error("Error removing user from localStorage:", error);
    }
  };

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

        setUserName,
        setUserEmail,
        removeUser,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export function useStateContext() {
  const context = useContext(TheContext);
  if (!context) {
    throw new Error("useStateContext must be used within contextProvider!");
  }

  return context;
}

export { TheContext, ContextProvider };
