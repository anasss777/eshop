"use client";

import { getUsers } from "@/sanity/sanity-utils";
import { UserProfile } from "@/types/UserProfile";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [currentUser, setCurrentUser] = useState<UserProfile>();
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const { data: sessionData } = useSession();

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

  const handleDelete = async () => {
    await fetch("/api/hi", {
      method: "DELETE",
    });
  };

  return (
    <div className="flex flex-col mt-20 items-center">
      {allUsers.map((user, index) => (
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
      </button>
    </div>
  );
};

export default Test;
