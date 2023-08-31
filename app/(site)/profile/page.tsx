import options from "@/app/api/auth/[...nextauth]/options";
import EditProfile from "@/components/EditProfile";
import SignOutButton from "@/components/SignOutButton";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const profile = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/signin");
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
        <p className="font-extrabold mt-2 bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 bg-clip-text text-transparent">
          {session.user?.name?.toUpperCase()}
        </p>
        <p className="mb-3 text-white">{session.user?.email}</p>
        <SignOutButton />
      </div>

      <EditProfile />
    </div>
  );
};

export default profile;
