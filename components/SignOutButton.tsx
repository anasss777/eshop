"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = async () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="py-1 px-3 text-white font-light bg-red-500 rounded-md shadow-lightShadowing hover:shadow-shadowing hover:scale-105
        hover:font-bold duration-300 transition-all ease-linear"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
