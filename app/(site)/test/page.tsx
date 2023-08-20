"use client";

import { TheContext } from "@/context/stateContext";
import { getUsers } from "@/sanity/sanity-utils";
import { CartItem } from "@/types/CartItem";
import { UserProfile } from "@/types/UserProfile";
import React, { useContext, useEffect, useState } from "react";

const Test = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [inputUser, setInputUser] = useState({
    name: "n",
    email: "e",
  });

  const cartContext = useContext(TheContext);

  if (!cartContext) {
    // Handle the case when the context is not yet available
    return null;
  }
  // const { cartItems } = cartContext;

  const handleClick = async () => {
    await fetch("/api/hi", {
      method: "POST",
      body: JSON.stringify({
        _type: "userProfile",
        name: inputUser.name,
        email: inputUser.email,
        cart: [],
      }),
    });
    location.reload();
  };

  const handleUpdate = async (id: string) => {
    await fetch("/api/hi", {
      method: "PUT",
      body: JSON.stringify({
        _type: "userProfile",
        _id: id,
        name: inputUser.name,
      }),
    });
    location.reload();
  };

  const deleteCartItems = async () => {
    await fetch("/api/hello", {
      method: "DELETE",
    });
  };

  const deleteUserProfile = async () => {
    await fetch("/api/hi", {
      method: "DELETE",
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputUser((prevInputUser) => ({
      ...prevInputUser,
      [name]: value,
    }));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchedData = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };

    fetchedData();
  }, [users]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newCartItems, setNewCartItems] = useState<CartItem[]>([]);

  const userCart = async () => {
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({
        _type: "cartItem",
        product: newCartItems[0]?.product,
        quantity: 1,
      }),
    });

    // if (!response.ok) {
    //   throw new Error(`Error creating cartItems. Status: ${response.status}`);
    // }

    // const cartItems = await response.json();
    // return cartItems;
  };

  return (
    <div>
      <button
        onClick={userCart}
        className="bg-blue-700 py-1 px-3 m-20 rounded-md text-white font-montserrat"
      >
        Create Cart
      </button>

      <button
        onClick={deleteCartItems}
        className="bg-blue-700 py-1 px-3 m-20 rounded-md text-white font-montserrat"
      >
        Delete Cart Items
      </button>

      <button
        onClick={deleteUserProfile}
        className="bg-blue-700 py-1 px-3 m-20 rounded-md text-white font-montserrat"
      >
        Delete User Profile
      </button>
    </div>
  );
};

export default Test;
