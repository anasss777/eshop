import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignInCard from "@/components/SignInCard";

const signin = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return <SignInCard />;
};

export default signin;
