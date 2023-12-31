"use client";

import { getUserByEmail } from "@/sanity/sanity-utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SignInButtons from "./SignInButtons";

const RegisterCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const user = await getUserByEmail(email);

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/hi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        signIn("credentials");
        signIn("credentials", {
          email,
          password,
        });
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-[600px] sm:h-[700px] w-full bg-gradient-to-b from-blue-300 to-gray-200">
      <div
        className="flex flex-col justify-center items-center h-fit w-[300px] sm:w-[500px] bg-transparent rounded-xl backdrop-blur-3xl sm:px-12
        px-8 py-10 shadow-lightShadowing border border-solid border-blue-400"
      >
        <p
          className="font-fancy w-[173px] sm:text-6xl text-5xl font-bold pb-2 px-1 bg-gradient-to-r from-purple-400 via-blue-700
            to-blue-500 bg-clip-text text-transparent"
        >
          E-Shop
        </p>

        <p className="font-montserrat text-gray-600 sm:text-2xl text-xl text-center">
          Enjoy endless bargains by becoming a member of{" "}
          <span className="font-bold font-fancy bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 bg-clip-text text-transparent">
            E-Shop
          </span>
        </p>

        <input
          onChange={(e) => setName(e.target.value)}
          className="sm:w-[400px] w-[250px] border border-gray-200 py-2 px-6 bg-zinc-100/40 my-3"
          placeholder="Username"
          type="text"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="sm:w-[400px] w-[250px] border border-gray-200 py-2 px-6 bg-zinc-100/40 my-3"
          placeholder="Email"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="sm:w-[400px] w-[250px] border border-gray-200 py-2 px-6 bg-zinc-100/40 my-3"
          placeholder="Password"
          type="password"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white font-montserrat cursor-pointer px-6 py-2 rounded-md hover:font-bold hover:scale-105
          transition-all duration-300 ease-linear"
        >
          Register
        </button>

        {error && (
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-sm mt-2 float-left">
            {error}
          </div>
        )}

        <SignInButtons />

        <Link className="text-sm mt-10 font-montserrat" href={"/signin"}>
          Already have an account? <span className="underline">Signin</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterCard;
