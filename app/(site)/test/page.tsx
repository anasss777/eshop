"use client";

import { getUsers } from "@/sanity/sanity-utils";
import { UserProfile } from "@/types/UserProfile";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [inputUser, setInputUser] = useState({
    name: "n",
    slug: "s",
    email: "e",
    image: "i",
  });

  // const handleImageUpload = (e: any) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (event) => {
  //       const dataURL = event.target?.result as string;
  //       setInputUser((prevInputUser) => ({
  //         ...prevInputUser,
  //         image: dataURL,
  //       }));
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleClick = async () => {
    await fetch("/api/hi", {
      method: "POST",
      body: JSON.stringify({
        _type: "userProfile",
        name: inputUser.name,
        slug: { _type: "slug", current: inputUser.slug },
        email: inputUser.email,
        image: inputUser.image,
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

  const handleDelete = async (type: any, id: string) => {
    await fetch("/api/hi", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _type: type,
        _id: id,
      }),
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputUser((prevInputUser) => ({
      ...prevInputUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchedData = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };

    fetchedData();
  }, [users]);

  return (
    <div className="pl-4 pt-4 flex flex-col">
      {users.map((user, index) => (
        <div key={index}>
          <p>
            Username {index + 1}: {user?.name}
          </p>
          <br />
        </div>
      ))}

      <input
        placeholder="Name"
        name="name"
        value={inputUser.name}
        onChange={handleChange}
        className="shadow-shadowing w-52 my-2 rounded-full px-2"
      />
      <input
        placeholder="Slug"
        name="slug"
        value={inputUser.slug}
        onChange={handleChange}
        className="shadow-shadowing w-52 my-2 rounded-full px-2"
      />
      <input
        placeholder="Email"
        name="email"
        value={inputUser.email}
        onChange={handleChange}
        className="shadow-shadowing w-52 my-2 rounded-full px-2"
      />

      <div className="w-52 my-2">
        <input
          type="file"
          accept="image/*"
          id="uploadImage"
          style={{ display: "none" }}
          // onChange={handleImageUpload}
        />
        <label
          htmlFor="uploadImage"
          className="bg-blue-400 py-1 px-3 mt-5 rounded-full w-fit shadow-md cursor-pointer"
        >
          Upload Image
        </label>
      </div>

      <p>{inputUser.name}</p>
      <p>{inputUser.slug}</p>
      <p>{inputUser.email}</p>
      <p>{inputUser.image}</p>

      <br />

      <button
        className="bg-blue-400 py-1 px-3 mt-5 rounded-full w-fit shadow-md"
        onClick={() => handleUpdate(users[0]._id)}
      >
        Update
      </button>

      <button
        className="bg-blue-400 py-1 px-3 mt-5 rounded-full w-fit shadow-md"
        onClick={() => handleClick()}
      >
        Create
      </button>

      <button
        className="bg-blue-400 py-1 px-3 mt-5 rounded-full w-fit shadow-md"
        onClick={() => handleDelete(users[0]._type, users[0]._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Test;
