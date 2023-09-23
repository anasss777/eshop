"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SignInButtons = () => {
  return (
    <div>
      <button
        className="relative top-5 flex justify-center items-center shadow-lightShadowing md:text-xl text-base p-2 rounded-xl text-gray-600
        font-montserrat hover:scale-[1.03] hover:shadow-shadowing duration-300 transition-all ease-linear"
        onClick={() => signIn("google")}
      >
        <Image src="/Google.png" alt="Google logo" width={20} height={20} />{" "}
        &nbsp; Sign in with Google
      </button>
    </div>
  );
};

export default SignInButtons;
