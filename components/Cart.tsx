import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div>
      <Image
        src="/cart.png"
        alt="cart logo"
        height={5}
        width={30}
        className="object-scale-down invert-[90%] float-right py-2 mr-4 h-auto w-auto"
      />
    </div>
  );
};

export default Cart;
