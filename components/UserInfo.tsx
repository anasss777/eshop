"use client";

import React from "react";

const UserInfo = () => {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");

  return (
    <div className="flex flex-col">
      <p className="font-extrabold mt-2 bg-gradient-to-r from-purple-400 via-blue-700 to-blue-500 bg-clip-text text-transparent mx-auto">
        {name?.toLocaleUpperCase()}
      </p>{" "}
      <p className="mb-3 text-white">{email}</p>
    </div>
  );
};

export default UserInfo;
