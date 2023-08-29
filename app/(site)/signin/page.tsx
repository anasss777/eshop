import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import options from "@/app/api/auth/[...nextauth]/options";
import SignInButtons from "@/components/SignInButtons";

const signin = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/");
  }

  return (
    <div className="relative flex justify-center items-center h-[700px] w-full bg-gradient-to-b from-blue-300 to-gray-200">
      <div
        className="flex flex-col justify-center items-center h-[450px] w-[500px] bg-transparent rounded-xl backdrop-blur-3xl px-12
        shadow-lightShadowing border border-solid border-blue-400"
      >
        <p
          className="relative bottom-20 font-fancy w-[173px] text-6xl font-bold pb-2 px-1 bg-gradient-to-r from-purple-400 via-blue-700
          to-blue-500 bg-clip-text text-transparent"
        >
          E-Shop
        </p>

        <p className="relative bottom-8 font-montserrat text-gray-600 text-2xl text-center">
          Enjoy endless bargains by becoming a member of{" "}
          <span className="font-bold font-fancy bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 bg-clip-text text-transparent">
            E-Shop
          </span>
        </p>

        <SignInButtons />
      </div>
    </div>
  );
};

export default signin;
