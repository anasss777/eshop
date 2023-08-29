import options from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "@/components/SignOutButton";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const profile = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/");
  }

  return (
    <div
      className="flex flex-col py-20 justify-center items-center font-montserrat h-full bg-gradient-to-b from-blue-200 via-blue-300
    to-blue-400"
    >
      <div className="w-[343px] flex flex-col items-center shadow-md py-3">
        {session.user?.image && (
          <Image
            className="h-auto w-auto object-scale-down rounded-full"
            src={session.user?.image}
            alt="profil picture"
            height={200}
            width={200}
          />
        )}
        <p className="font-bold text-white my-2">
          {session.user?.name?.toUpperCase()}
        </p>
        <SignOutButton />
      </div>
      <div className="float-left mb-5 py-1 w-fit shadow-md px-2">
        <p className="mb-3">
          <span className="font-bold text-white">Email :</span>{" "}
          {session.user?.email}
        </p>
        <div className="flex flex-row mb-3">
          <p className="font-bold text-white">Phone number :</p>
          <input
            type="text"
            className="rounded-md ml-2 px-1 focus:border-2 focus:border-blue-500 outline-none border border-blue-500"
          />
        </div>
        <div className="flex flex-row mb-3">
          <p className="font-bold text-white">Country :</p>
          <input
            type="text"
            className="rounded-md ml-2 px-1 relative left-[57.5px] focus:border-2 focus:border-blue-500 outline-none border
            border-blue-500"
          />
        </div>
        <div className="flex flex-row mb-3">
          <p className="font-bold text-white">State :</p>
          <input
            type="text"
            className="rounded-md ml-2 px-1 relative left-[80.5px] focus:border-2 focus:border-blue-500 outline-none border
            border-blue-500"
          />
        </div>
        <div className="flex flex-row mb-3">
          <p className="font-bold text-white">City :</p>
          <input
            type="text"
            className="rounded-md ml-2 px-1 relative left-[91px] focus:border-2 focus:border-blue-500 outline-none border
            border-blue-500"
          />
        </div>
        <div className="flex flex-row mb-3">
          <p className="font-bold text-white">Zip code :</p>
          <input
            type="text"
            className="rounded-md ml-2 px-1 relative left-[53px] focus:border-2 focus:border-blue-500 outline-none border
            border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default profile;
