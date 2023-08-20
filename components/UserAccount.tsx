"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

const UserAccount = () => {
  const { data: sessionData } = useSession();

  return (
    <div>
      {sessionData?.user ? (
        <div className="float-right flex flex-col">
          <p className="px-2 text-white font-montserrat font-bold">
            Hi, {sessionData?.user?.name?.split(" ")[0]}
          </p>
          <button
            className="relative flex justify-center items-center w-fit h-fit px-3 mr-1 rounded-full text-sm
            shadow-lightShadowing bg-white text-blue-400 hover:scale-105 duration-300 transition-all ease-linear"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="float-right flex flex-col">
          <p className="px-2 text-white font-montserrat font-bold">
            Sign In/Sign Up
          </p>
          <button
            className="relative flex justify-center items-center w-fit h-fit px-3 mx-auto rounded-full text-sm
            shadow-lightShadowing bg-white text-blue-400 hover:scale-105 duration-300 transition-all ease-linear"
            onClick={() => signIn("google")}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
