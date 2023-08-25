"use client";

// import { TheContext } from "@/context/stateContext";
// import { getUsers } from "@/sanity/sanity-utils";
// import { CartItem } from "@/types/CartItem";
import { UserProfile } from "@/types/UserProfile";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);

  const handleClick = async () => {
    await fetch("/api/hi", {
      method: "POST",
      body: JSON.stringify({
        _type: "userProfile",
        name: "inputUser.name",
        email: "inputUser.email",
        cart: [],
      }),
    });
    location.reload();
  };
};

export default Test;
