import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import RegisterCard from "@/components/RegisterCard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const register = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return <RegisterCard />;
};

export default register;
