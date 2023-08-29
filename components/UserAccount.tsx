import options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserAccount = async () => {
  const sessionData = await getServerSession(options);
  return (
    <div>
      {sessionData?.user ? (
        <div className="float-right flex flex-row mt-2">
          {sessionData?.user?.image ? (
            <Link href="/profile">
              <Image
                src={sessionData?.user?.image}
                alt="Profile picture"
                height={30}
                width={30}
                className="h-auto w-auto rounded-full shadow-shadowing object-scale-down"
              />
            </Link>
          ) : (
            <Link href="/profile">
              <Image
                src="/user.png"
                alt="No profile picture"
                height={30}
                width={30}
                className="h-auto w-auto rounded-full shadow-shadowing object-scale-down"
              />
            </Link>
          )}
          <p className="px-2 text-white font-montserrat font-bold mt-1">
            Hi, {sessionData?.user?.name?.split(" ")[0]}
          </p>
        </div>
      ) : (
        <div className="float-right flex flex-col">
          <p className="px-2 text-white font-montserrat font-bold">
            Sign In/Sign Up
          </p>
          <Link href="/signin">
            <button
              className="relative flex justify-center items-center w-fit h-fit px-3 mx-auto rounded-full text-sm
            shadow-lightShadowing bg-white text-blue-400 hover:scale-105 duration-300 transition-all ease-linear"
            >
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
