import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditProfile from "@/components/EditProfile";
import SignOutButton from "@/components/SignOutButton";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const profile = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div
      className="flex flex-col py-20 justify-center items-center font-montserrat h-full bg-gradient-to-b from-blue-200 via-blue-300
    to-blue-400"
    >
      <div className="w-[343px] flex flex-col items-center shadow-md py-3">
        {session?.user?.image ? (
          <Link href="/profile">
            <Image
              src={session?.user?.image}
              alt="Profile picture"
              height={150}
              width={150}
              className="h-auto w-auto rounded-full shadow-shadowing object-scale-down"
            />
          </Link>
        ) : (
          <Link href="/profile">
            <Image
              src="/user.png"
              alt="No profile picture"
              height={150}
              width={150}
              className="h-auto w-auto rounded-full shadow-shadowing object-scale-down"
            />
          </Link>
        )}
        {session.user?.name ? (
          <div className="flex flex-col">
            <p className="font-extrabold mt-2 bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 bg-clip-text text-transparent mx-auto">
              {session.user?.name?.toUpperCase()}
            </p>
            <p className="mb-3 text-white">{session.user?.email}</p>
          </div>
        ) : (
          <UserInfo />
        )}
        <SignOutButton />
      </div>

      <EditProfile userEmail={session.user?.email as string} />
    </div>
  );
};

export default profile;
