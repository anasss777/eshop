import Image from "next/image";
import React from "react";

const UserAccount = () => {
  return (
    <div>
      <Image
        src="/user.png"
        alt="user logo"
        height={5}
        width={30}
        className="object-scale-down invert-[90%] float-right py-2 mr-2 h-auto w-auto"
      />
    </div>
  );
};

export default UserAccount;
