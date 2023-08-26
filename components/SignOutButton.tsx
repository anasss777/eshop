"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = async () => {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="py-1 px-3 text-white font-bold bg-blue-400 rounded-md shadow-shadowing"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
