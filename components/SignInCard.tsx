"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SignInButtons from "./SignInButtons";
import { getUserByEmail } from "@/sanity/sanity-utils";
import bcrypt from "bcryptjs";

const SignInCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const userEmail = await getUserByEmail(email);

      if (!email || !password) {
        setError("All fields are necessary.");
        return;
      }

      if (!userEmail) {
        setError("Check your email or register as new user");
      }

      const correctPassword = userEmail?.password as string;
      const passwordsMatch = await bcrypt.compare(password, correctPassword);

      if (!passwordsMatch) {
        setError("Wrong Password! Please try again.");
        return;
      }

      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      router.push("/");
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex justify-center items-center h-[700px] w-full bg-gradient-to-b from-blue-300 to-gray-200">
      <div
        className="flex flex-col justify-center items-center h-fit w-[500px] bg-transparent rounded-xl backdrop-blur-3xl px-12 py-10
      shadow-lightShadowing border border-solid border-blue-400"
      >
        <p
          className="font-fancy w-[173px] text-6xl font-bold pb-2 px-1 bg-gradient-to-r from-purple-400 via-blue-700
        to-blue-500 bg-clip-text text-transparent"
        >
          E-Shop
        </p>

        <p className="font-montserrat text-gray-600 text-2xl text-center">
          Enjoy endless bargains by becoming a member of{" "}
          <span className="font-bold font-fancy bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 bg-clip-text text-transparent">
            E-Shop
          </span>
        </p>

        <input
          onChange={(e) => setEmail(e.target.value)}
          className="w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40 my-3"
          placeholder="Email"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-[400px] border border-gray-200 py-2 px-6 bg-zinc-100/40 my-3"
          placeholder="Password"
          type="password"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white font-montserrat cursor-pointer px-6 py-2 rounded-md hover:font-bold hover:scale-105
      transition-all duration-300 ease-linear"
        >
          Login
        </button>

        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 float-left">
            {error}
          </div>
        )}

        <SignInButtons />

        <Link className="text-sm mt-10 font-montserrat" href={"/signin"}>
          Don&apos;t have an account?{" "}
          <span className="underline">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default SignInCard;
