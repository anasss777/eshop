import options from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "@/components/SignOutButton";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const signout = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex flex-col my-40 justify-center items-center font-montserrat">
      <p>Username: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      {session.user?.image && (
        <Image
          className="h-auto w-auto object-scale-down rounded-full my-5"
          src={session.user?.image}
          alt="profil picture"
          height={200}
          width={200}
        />
      )}
      <SignOutButton />
    </div>
  );
};

export default signout;
