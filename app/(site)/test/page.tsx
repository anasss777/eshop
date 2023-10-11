"use client";

import { getUserByEmail, getUsers } from "@/sanity/sanity-utils";
import { Product } from "@/types/Product";
import { UserProfile } from "@/types/UserProfile";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type CartItem = {
  product: Product;
  quantity: number;
};

const Test = () => {
  const [currentUser, setCurrentUser] = useState<UserProfile>();
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const { data: sessionData } = useSession();
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setAllUsers(fetchedUsers);
      setCurrentUser(
        fetchedUsers.filter((user) => user.email == sessionData?.user?.email)[0]
      );
    };

    fetchUsers();
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = sessionData?.user?.email;
      if (userEmail) {
        const fetchedUser = await getUserByEmail(userEmail);
        setCurrentUser(fetchedUser as UserProfile);
      }
    };

    fetchUser();
  }, [sessionData?.user?.email]);

  const handleDelete = async () => {
    await fetch("/api/hi", {
      method: "DELETE",
    });
  };

  if (!currentUser) {
    return;
  }

  let WhatsOntheCart: CartItem[] = [];
  WhatsOntheCart = JSON.parse(currentUser.cart);

  return (
    <div className="flex flex-col mt-20 items-center">
      {WhatsOntheCart.map((item, index) => (
        <p key={index}>
          {item.product.name} {"-"} {item.quantity}
        </p>
      ))}
      {/* {allUsers.map((user, index) => (
        <div key={index}>
          <p>{index}.</p>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>{user?.phoneNumber}</p>
          <p>{user?.country}</p>
          <p>{user?.city}</p>
          <p>{user?.region}</p>
          <p>{user?.zipCode}</p>
          <br />
        </div>
      ))}

      <button
        onClick={handleDelete}
        className="bg-blue-400 px-3 py-1 rounded-md text-white font-montserrat font-bold"
      >
        Delete
      </button> */}
    </div>
  );
};

export default Test;
