"use client";

import React from "react";

const HiUser = () => {
  const name = localStorage.getItem("userName")?.split(" ")[0];

  return <div>Hello, {name}</div>;
};

export default HiUser;
